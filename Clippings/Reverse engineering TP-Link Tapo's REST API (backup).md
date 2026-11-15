---
title: "Reverse engineering TP-Link Tapo's REST API (backup)"
source: "https://dev.to/ad1s0n/reverse-engineering-tp-link-tapos-rest-api-part-1-4g6"
author:
published: 2024-10-09
created: 2026-04-12
description: "Target overview   Ecosystem of TP-Link Tapo consists of:   Client - Tapo mobile... Tagged with security, android, cybersecurity, computerscience."
tags:
  - "clippings"
---
## Target overview

Ecosystem of TP-Link Tapo consists of:

1. Client - Tapo mobile app
2. Cloud
3. Endpoint device - in following case it's smart lightbulb: Tapo L530E

In this scenario Tapo utilizes Cloud Centric Architecture, which means that devices are directly connected to home Wi-Fi network without any need of additional hub.

[![Image description](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnnfjx10fuawqpd8jn1ht.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnnfjx10fuawqpd8jn1ht.png)

Communication between Tapo App and Cloud is based on HTTP protocol. Every action that user want to perform must go through Tapo's cloud.

Purpose is to find out, how the communication between app and cloud works in detail - what endpoints are called during lifetime of application - authentication, device endpoints, etc. Since, there is no public API documentation, all those endpoints have to be explored manually by performing reverse engineering.

It can be achieved by intercepting every request which is sent from client and intercepting every response which is sent by cloud. Traffic interception can be performed using proxy such as Burp Suite.

However, as it turns out, setting up proxy is not everything we need to do. Targeted app performs SSL pinning which means, that client can communicate only with trusted server. Since Burp certificate will be used, we need to bypass SSL pinning.

## SSL Pinning

### What is SSL Pinning

SSL Pinning is technique used by developers of mobile apps to prevent MITM attack by hardcoding valid TLS/SSL certificates into app or device. Client verifies whether remote server has valid certificate or not.SSL Pinning is often implemented with external libraries such as `okhttp3`, however it is possible to come up with manual implementations of SSL Pinning, which can be harder to bypass.

### How to bypass SSL Pinning

Bypassing SSL pinning on various of factors such as:

- technology stack of application - was it written in Flutter, Kotlin or Java?
- how SSL pinning is implemented - common library or custom implementation?

However the last one is the most important, common library can be hooked easily with Objection and Frida. Bypassing custom implementation can be very easy or very hard, it strictly depends on its implementation.

But, SSL pinning in most cases can be easily bypassed, in case of Tapo app, developers decided to use `okhttp3` library, so Objection and Frida should do the work.

Objection will hook and bypass `okhttp3` classes which implements SSL pinning.

## Setting up emulator

For emulator, Google Pixel 6 with Android 12 (API 31) and without Google Store was used.  
After downloading and setting up device in Android Studio, emulator was run with following command:  

```
emulator -avd "Pixel6" -writable-system -http-proxy 192.168.0.172:8081
```

## Installing Tapo

Tapo app was downloaded from [Apkpure](https://apkpure.com/pl/tp-link-tapo/com.tplink.iot). It is in XAPK format, so before installing, it has to be unzipped.  

```
unzip TP-Link\ Tapo_3.7.113_APKPure.xapk
```

Installation is done with `install-multiple` command, because of multiple apk files.  

```
adb install-multiple com.tplink.iot.apk config.ar.apk config.arm64_v8a.apk config.armeabi_v7a.apk config.en.apk  config.tvdpi.apk config.vi.apk  config.xhdpi.apk config.xxhdpi.apk config.xxxhdpi.apk config.zh.apk config.de.apk  config.fr.apk config.hi.apk config.in.apk config.it.apk config.ja.apk config.ldpi.apk config.mdpi.apk config.ms.apk  config.nl.apk config.pl.apk config.pt.apk config.ru.apk config.th.apk
```

Now Tapo app should be accessible in emulator.

## Setting up Burp proxy

Setting up Burp proxy in web application is very simple, however setting it up in Android application is little bit more challenging, because of security measures implemented at the operating system level.

First of all, I added new proxy listener and exported CA certificate in DER format.Android stores certificates in PEM format using strict naming convention, so I changed certificate name and format.  

```
(Source: https://book.hacktricks.xyz/mobile-pentesting/android-app-pentesting/install-burp-certificate)

openssl x509 -inform DER -in burp_cacert.der -out burp_cacert.pem
CERTHASHNAME="\`openssl x509 -inform PEM -subject_hash_old -in burp_cacert.pem | head -1\`.0"
mv burp_cacert.pem $CERTHASHNAME
```

Uploading Burp certificate to system's certificate storage requires remounting file system.  

```
adb root
adb remount
adb push $CERTHASHNAME /sdcard/ 
adb shell mv /sdcard/$CERTHASHNAME /system/etc/security/cacerts 
adb shell chmod 644 /system/etc/security/cacerts/$CERTHASHNAME 
adb reboot
```

Now, proxy should be ready.

## SSL pinning bypass

After downloading [Frida Server](https://github.com/frida/frida/releases) (Android, x86\_64), I pushed it into device and executed it.  

```
unxz frida-server-16.5.2-android-x86_64.xz
mv frida-server-16.5.2-android-x86_64 frida-server
adb push frida-server /data/local/tmp/
adb shell "chmod 755 /data/local/tmp/frida-server"
adb shell "/data/local/tmp/frida-server &"
```

Installing Objection is very convenient, since it can be done with `pip`:  

```
python3 -m pip install objection
```

Used `frida-ps -U` to list running processes with their PIDs.  

```
PID  Name
----  -------------------------------------------------------------
4538  Chrome
1426  Google
1442  Messages
3816  Phone
4736  Photos
 889  SIM Toolkit
4228  Settings
2721  Tapo
3496  YouTube
```

With Tapo's PID, objection can be run in explore mode. Finally, after entering `android sslpinning disable`, `CertificatePinner` class is bypassed.  

```
objection -g 2721 explore

Using USB device \`Android Emulator 5554\`
Agent injected and responds ok!

     _   _         _   _
 ___| |_|_|___ ___| |_|_|___ ___
| . | . | | -_|  _|  _| | . |   |
|___|___| |___|___|_| |_|___|_|_|
      |___|(object)inject(ion) v1.11.0

     Runtime Mobile Exploration
        by: @leonjza from @sensepost

[tab] for command suggestions
com.tplink.iot on (google: 12) [usb] # android sslpinning disable
(agent) Custom TrustManager ready, overriding SSLContext.init()
(agent) Found okhttp3.CertificatePinner, overriding CertificatePinner.check()
(agent) Found okhttp3.CertificatePinner, overriding CertificatePinner.check$okhttp()
(agent) Found com.android.org.conscrypt.TrustManagerImpl, overriding TrustManagerImpl.verifyChain()
(agent) Found com.android.org.conscrypt.TrustManagerImpl, overriding TrustManagerImpl.checkTrustedRecursive()
(agent) Registering job 613823. Type: android-sslpinning-disable
```

## Intercepting authentication request

After bypassing SSL pinning it is possible to intercept requests, e.g. authentication request below.However, Tapo is not giving up at this point, some endpoints require HTTP request signature. So, it is still not possible to use requests without application support.

## Reverse engineering signature algorithm

HTTP request is attached with its signature, so it is not possible to change body of request and resent it with same signature, because remote target returns error indicating that signature is not valid. For example I changed password from `test` to `test2` - notice that error does not indicate that password is incorrect.So, at the moment, there is no possibility of sending arbitrary HTTP requests because every request is signed. However, signing process is performed on client (app) side, so some sort of algorithm, which generates signature has to be implemented somewhere in the application.

By performing static analysis of decompiled source code with a little help of dynamic instrumentation I developed a Proof-of-Concept, which generates valid signature - the way how it was achieved is shown below.

### Source code analysis

Application `com.tplink.iot.apk` was decompiled with `jadx-gui`. So, I started with searching for targeted endpoint: `/api/v2/account/login`.It is only an interface, so there is nothing more interesting here. However, it was confirmed that, targeted endpoint indeed requires signature - `@k` annotation.

> As it turns out all endpoints under `/api/v2/accout` requires signature.

Creating signature is probably done by interceptor, so I started searching for interesting interceptors.In the `SingatureIncerceptror`, there was whole logic responsible for calculating signature. I renamed particular methods and variables to make this code more readable.  

```
public class SignatureInterceptor implements Interceptor {
    /* renamed from: a */
    private final String accessKey;
    /* renamed from: b */
    private final String secret;
    public SignatureInterceptor(String str, String secret) {
        this.accessKey = str;
        this.secret = secret;
    }
    /* renamed from: a */
    private String createPresignature(RequestBody requestBody) throws NoSuchAlgorithmException, IOException {
        byte[] bytes;
        if (requestBody != null) {
            Buffer buffer = new Buffer();
            requestBody.writeTo(buffer);
            bytes = buffer.readByteArray();
            if (bytes.length <= 0) {
                bytes = "{}".getBytes();
            }
        } else {
            bytes = "{}".getBytes();
        }
        return mf0.a.b64encode(mf0.a.calculateMD5(bytes));
    }
    /* renamed from: b */
    private String sign(String encodedReqSignature, long timestamp, String nonce, String apiUrl) throws NoSuchAlgorithmException, InvalidKeyException {
        StringBuilder sb2 = new StringBuilder();
        if (encodedReqSignature != null) {
            sb2.append(encodedReqSignature);
            sb2.append("\n");
        }
        sb2.append(timestamp);
        sb2.append("\n");
        if (nonce != null) {
            sb2.append(nonce);
            sb2.append("\n");
        }
        sb2.append(apiUrl);
        SecretKeySpec secretKeySpec = new SecretKeySpec(this.secret.getBytes(), "HmacSHA1");
        Mac mac = Mac.getInstance("HmacSHA1");
        mac.init(secretKeySpec);
        return mf0.a.bytesToHexstring(mac.doFinal(sb2.toString().getBytes()));
    }
    ...
}
```

The method responsible for intercepting unfortunately wasn't decompiled properly. So I had to analyse it manually. I didn't placed entire algorithm here, because it was quite long, I focused on most important labels.There are two interesting things in above code:

- value of `timestamp` is constant and is equal to 9999999999 (`r6` in `L50`).
- `nonce` is generated using UUID schema in 4th version

#### Presignature algorithm analysis

The final signature is calculated with HmacSHA1, however before that, request body is being processed with some other algorithm too.  

```
private String createPresignature(RequestBody requestBody) throws NoSuchAlgorithmException, IOException {
        byte[] bytes;
        if (requestBody != null) {
            Buffer buffer = new Buffer();
            requestBody.writeTo(buffer);
            bytes = buffer.readByteArray();
            if (bytes.length <= 0) {
                bytes = "{}".getBytes();
            }
        } else {
            bytes = "{}".getBytes();
        }
        return mf0.a.b64encode(mf0.a.calculateMD5(bytes));
    }
```
1. Request Body is saved into bytes buffer.
2. MD5 digest is calculated for `bytes`
3. MD5 digest is encoded with base64.

#### Signature algorithm analysis

```
private String sign(String encodedReqSignature, long timestamp, String nonce, String apiUrl) throws NoSuchAlgorithmException, InvalidKeyException {
        StringBuilder sb2 = new StringBuilder();
        if (encodedReqSignature != null) {
            sb2.append(encodedReqSignature);
            sb2.append("\n");
        }
        sb2.append(timestamp);
        sb2.append("\n");
        if (nonce != null) {
            sb2.append(nonce);
            sb2.append("\n");
        }
        sb2.append(apiUrl);
        SecretKeySpec secretKeySpec = new SecretKeySpec(this.secret.getBytes(), "HmacSHA1");
        Mac mac = Mac.getInstance("HmacSHA1");
        mac.init(secretKeySpec);
        return mf0.a.bytesToHexstring(mac.doFinal(sb2.toString().getBytes()));
    }
```
1. String Builder is instantiated.
2. In first place, `presignature` is appended, along with new line.
3. `Timestamp` is appended along with new line
4. `Nonce` is also appended with new line
5. Finally, `apiUrl` is appended.
6. New secret key is instantiated with some `secret` and HmacSHA1 function.
7. In the end, HMAC is calculated.

Secret used for `SecretKeySpec` is hardcoded in application. I couldn't find it manually, so I hooked `SignatureInterceptor` constructor with Frida.  

```
const classLoaders = Java.enumerateClassLoadersSync();
for (const classLoader in classLoaders) {
    try {
        classLoader.findClass("com.tplink.cloud.api.AccountV2Api");
        Java.classFactory.loader = classLoader;
        console.log(\`classLoader=${classLoader}\`)
        break;
    } catch {
        continue;
    }
}

Java.perform(() => {
  let SignatureInterceptor = Java.use("m7.m");
  SignatureInterceptor["$init"].implementation = function (str, str2) {
    console.log(\`SignatureInterceptor.$init is called: str=${str}, str2=${str2}\`);
    this["$init"](str, str2);
};
})
```
- `str` is Access Key and it is not considered during signature calculation
- `str2` is secret, which is used during secret key instantiation - so it it the most interesting part

> Above Frida code was generated by `jadx-gui` (except for `classLoaders` part)So `secret=6ed7d97f3e73467f8a5bab90b577ba4c`. I assured also that, this is in fact hardcoded value by simply searching it in `jadx-gui`.With above knowledge, prototype of PoC can be created.

## Constructing PoC and verifying it along with Frida scripts

Suppose that there is a following authentication request with valid signature:PoC as an input takes:

- Nonce (UUIDv4) - which generated per every request
- Timestamp - which is constant
- Secret - secret value used in HMAC
- Endpoint name
- Request body - order of fields in JSON matters!

As an output it returns valid signature.  

```
package main.org.poc;  

import okhttp3.MediaType;  
import okhttp3.RequestBody;  
import okio.Buffer;  

import javax.crypto.Mac;  
import javax.crypto.spec.SecretKeySpec;  
import java.io.IOException;  
import java.security.InvalidKeyException;  
import java.security.MessageDigest;  
import java.security.NoSuchAlgorithmException;  
import java.util.Base64;  

public class PoC {  
    public static void main(String[] args) throws IOException, NoSuchAlgorithmException, InvalidKeyException {  
        String json = "{\"appType\":\"TP-Link_Tapo_Android\",\"appVersion\":\"3.7.113\",\"cloudPassword\":\"test\",\"cloudUserName\":\"ad1s0n@test.com\",\"platform\":\"Android 12\",\"refreshTokenNeeded\":false,\"terminalMeta\":\"1\",\"terminalName\":\"Google sdk_gphone64_x86_64\",\"terminalUUID\":\"2F5AC7AD94F77F91BC2419DE55CA3C0A\"}";  
        String presignature = createPresignature(json);  
        System.out.println("Presignature: " + presignature);  
        String key = "6ed7d97f3e73467f8a5bab90b577ba4c";  
        String nonce = "55bcd878-5c44-45c2-9d5a-e011c24a7ac8";  
        String apiUrl = "/api/v2/account/login";  
        long timestamp = 9999999999L;  
        System.out.println("Signature: " + createSignature(presignature, timestamp, nonce, apiUrl, key));  
    }  

    private static byte[] requestToBytes(String json) throws IOException {  
        RequestBody body = RequestBody.create(MediaType.parse("application/json"), json);  
        Buffer buffer = new Buffer();  
        body.writeTo(buffer);  
        return buffer.readByteArray();  
    }  

    private static byte[] calculateMD5(byte[] bytes) throws NoSuchAlgorithmException {  
        MessageDigest md5 = MessageDigest.getInstance("MD5");  
        md5.update(bytes);  
        return md5.digest();  
    }  

    private static String b64encode(byte[] bytes){  
        return Base64.getEncoder().encodeToString(bytes);  
    }  

    private static String createPresignature(String json) throws IOException, NoSuchAlgorithmException {  
        return b64encode(calculateMD5(requestToBytes(json)));  
    }  

    private static String bytesToHexstring(byte[] bytes){  
        StringBuilder builder = new StringBuilder();  
        for (byte b : bytes){  
            String hex = Integer.toHexString(b & 255);  
            if (hex.length() == 1){  
                builder.append(0);  
                builder.append(hex);  
            } else{  
                builder.append(hex);  
            }  
        }  
        return builder.toString();  
    }  

    private static String createSignature(String presignature, long timestamp, String nonce, String apiUrl, String key) throws NoSuchAlgorithmException, InvalidKeyException {  
        StringBuilder builder = new StringBuilder();  
        if (presignature != null){  
            builder.append(presignature);  
            builder.append("\n");  
        }  
        builder.append(timestamp);  
        builder.append("\n");  
        if (nonce != null){  
            builder.append(nonce);  
            builder.append("\n");  
        }  
        builder.append(apiUrl);  
        SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(), "HmacSHA1");  
        Mac mac = Mac.getInstance("HmacSHA1");  
        mac.init(secretKeySpec);  
        byte[] bytes = mac.doFinal(builder.toString().getBytes());  
        return bytesToHexstring(bytes);  
    }  

}
```

I put the request body into PoC program and required headers in a result I got:Signature matches signature in the screen from Burp above. I also developed custom Frida script (with help of `jadx-gui`) to hook functions responsible for calculating presignature and signature.  

```
const classLoaders = Java.enumerateClassLoadersSync();
for (const classLoader in classLoaders) {
    try {
        classLoader.findClass("com.tplink.cloud.api.AccountV2Api");
        Java.classFactory.loader = classLoader;
        console.log(\`classLoader=${classLoader}\`)
        break;
    } catch {
        continue;
    }
}

Java.perform(() => {
  let SignatureInterceptor = Java.use("m7.m");
  SignatureInterceptor["$init"].implementation = function (str, str2) {
    console.log(\`SignatureInterceptor constructor is called: accessKey=${str}, secret=${str2}\`);
    this["$init"](str, str2);
};
   SignatureInterceptor["a"].implementation = function (requestBody) {
    let result = this["a"](requestBody);
    console.log(\`SignatureInterceptor.createSignatureAndEncode presignature=${result}\`);
    return result;
  };
  SignatureInterceptor["b"].implementation = function (encodedReqSignature, timestamp, nonce, apiUrl) {
    console.log(\`SignatureInterceptor.sign is called: encodedReqSignature=${encodedReqSignature}, timestamp=${timestamp}, nonce=${nonce}, apiUrl=${apiUrl}\`);
    let result = this["b"](encodedReqSignature, timestamp, nonce, apiUrl);
    console.log(\`SignatureInterceptor.sign result=${result}\`);
    return result;
};
})
```It can be seen that above values matches values in headers (Burp suite screen), so PoC works!

Now, there is possibility of invoking arbitrary endpoints without necessity of using Tapo application.

That's all for the first part of that series.[Sonar](https://dev.to/sonar)Promoted

[![State of Code Developer Survey report](https://media2.dev.to/dynamic/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fucarecdn.com%2F2f2ce9b0-68e0-48a1-bf3e-46c08831a9be%2F)](https://www.sonarsource.com/sem/the-state-of-code/developer-survey-report/?utm_medium=paid&utm_source=dev&utm_campaign=ss-state-of-code-developer-survey26&utm_content=report-devsurvey-banner-x-2&utm_term=ww-all-x&s_category=Paid&s_source=Paid+Social&s_origin=dev&bb=259979)

## State of Code Developer Survey report

Did you know 96% of developers don't fully trust that AI-generated code is functionally correct, yet only 48% always check it before committing? Check out Sonar's new report on the real-world impact of AI on development teams.