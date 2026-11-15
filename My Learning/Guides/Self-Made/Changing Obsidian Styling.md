---
tags:
  - Guides
---
[[Guides]]

---
# Step 1 - Open Inspect Element
`Control + Shift + i` - Press key combination while in Obsidian window to open inspect element.

>[!info] Obsidian is built using Electron
>Which effectively uses a browser window and due to using chromium meant that the DevTools were included over which is what Electron uses as its primary interface. 
>
>Obsidian [Snippets](https://obsidian.md/help/snippets) are supported.

>[!info] Interestingly
>Obsidian also has its own [CLI](https://obsidian.md/help/cli).
# Step 2 
Go to `Elements` -> Click `element-picker` (2) -> Select `Element` (3) -> Select `CSS Property` (e.g. color) -> Make note of type and class e.g. `div.classout-content`.
## 1
![[Guide-Changing-Obsidian-Styling-Elements.png]]
## 2
![[Guide-Changing-Obsidian-Styling-Elements-Picker.png]]
## 3
![[Guide-Changing-Obsidian-Styling-Element-Chosen.png]]
## 4
![[Guide-Changing-Obsidian-Styling-Element-Properties.png]]
# Step 3
Go to `Obsidian Settings` (1) -> `Settings` -> `Appearance` (2) -> `CSS Snippets` (3) -> Open `CSS Folder` (4) -> Create New File e.g. `custom.css` (5) -> Refresh CSS (6) -> Enable `custom.css` (7) -> Reload Obsidian Note and See change! (8)
## 1
![[Guide-Changing-Obsidian-Settings-Icon.png]]
## 2
![[Guide-Changing-Obsidian-Settings-Appearance.png]]
## 3
![[Guide-Changing-Obsidian-Settings-CSS-Snippets.png]]
## 4
![[Guide-Changing-Obsidian-Settings-CSS-Folder.png]]
## 5
![[Guide-Changing-Obsidian-Settings-Custom-CSS.png]]

```css
div.callout-content {
	color: #8B0000 !important
}
```

>[!note] CSS !important Rule [Source](https://www.w3schools.com/css/css_important.asp)
>The `!important` rule is used to give the value of a specific property the highest priority.
>
>The `!important` rule will override ALL previous styling rules for that specific property on that element!
>
>The `!important` keyword is added to the end of a CSS declaration, before the semicolon.
>
## 6
![[Guide-Changing-Obsidian-Custom-CSS-Settings.png]]
## 7
![[Guide-Changing-Obsidian-Custom-CSS-Active.png]]

>[!important] Some changes are better than others! 🙈

---
[[Guides]]

