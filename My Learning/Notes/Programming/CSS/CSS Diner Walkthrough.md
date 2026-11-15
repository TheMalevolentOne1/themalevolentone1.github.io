---
tags:
  - Programming
  - CSS
---
[[Notes]]
[CSS Diner](https://flukeout.github.io/)

---
# Level 1 - Select the Plates

>[!question]
> # Type Selector
> `A {} <- demonstrational do not add.`
> Select elements by their type A.
> Selects all elements of type **A**. 
> Type refers to the type of tag, so div, p and ul are all different element types.

![[CSS-Diner-Double-Plate.png]]

```html
<div class="table">
	<plate />
	<plate />
</div>
```

>[!success] Answer
>plate
>

---
# Level  2 - Select The Bento Boxes

>[!question]
># Type Selector
>Select elements by their type A.
>Selects all elements of type **A**. Type refers to the type of tag, so div, p and ul are all different element types.

![[CSS-Diner-Double-Bento.png]]

```html
<div class="table">
	<bento />
	<plate />
	<bento />
</div>
```

>[!success] bento

---
# Level 3 - Select The Fancy Plate

>[!question]
># Select elements with an ID
>`#id`
>Selects the element with a specific **id**. You can also combine the ID selector with the type selector.

![[Pasted image 20261028231247.png]]

```html
<div class="table">
	<plate id="fancy" />
	<plate />
	<bento />
</div>
```

>[!success] `#fancy`

---
# Level 4 -Select The Apple On The Plate

>[!question]
># Select an element inside another element
>A B
>Selects all **B** inside of **A** **B** is called a descendant because it is inside of another element.

![[Pasted image 20261028231543.png]]

```html
<div class="table">
	<bento />
		<plate>
			<apple />
		</plate>
	<apple />
</div>
```

>[!success] plate apple

---
# Level 5 - Select The Pickle On The Fancy Plate

>[!question]
># Combine the Descendant & ID Selectors
>`#id A`
>You can combine any selector with the descendent selector.

![[Pasted image 20261028232143.png]]

```html
<div class="table">
	<bento>
		<orange />
	</bento>
	<plate id="fancy">
		<pickle />
	</plate>
	<plate>
		<pickle />
	</plate>
</div>
```

>[!success] `#fancy` pickle

---
# Level 6 - Select All The Small Apples'

>[!question]
># Class Selector
>`.classname`
>The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.

![[Pasted image 20261028232705.png]]

```html
<div class="table">
	<apple />
	<apple class="small" />
	<plate>
		<apple class="small" />
	</plate>
	<plate />
</div>
```

>[!success] .small

---
# Level 7 - Select The Small Oranges

>[!question]
># Combine the Class Selector
>`A.className`
>You can combine the class selector with other selectors, like the type selector.

![[Pasted image 20261028232954.png]]

```html
<div class="table">
	<apple />
	<apple class="small" />
	<bento>
		<orange class="small" />
	</bento>
	<plate>
		<orange />
	</plate>
	<plate>
		<orange class="small" />
	</plate>
</div>
```

>[!success] orange.small

---
# Level 8 - Select The Small Oranges In The Bentos

>[!question]
># You can do it...
>`Put your back into it!`
>Combine what you learned in the last few levels to solve this one!

![[Pasted image 20261028233229.png]]

```html
<div class="table">
	<bento>
		<orange />
	</bento>
	<orange class="small" />
	<bento>
		<orange class="small" />
	</bento>
	<bento>
		<apple class="small" />
	</bento>
	<bento>
		<orange class="small" />
	</bento>
</div>
```

>[!success] bento orange.small

---
# Level 9 - Select All The Plates & Bentos

>[!question]
># Comma Combinator
>Combine Selectors with commas.
>`A, B`
>Thanks to Shatner technology, this selects all **A** and **B** elements. You can combine any selectors this way, and you can specify more than two.

![[Pasted image 20261028233641.png]]

```html
<div class="table">
	<pickle class="small" />
	<pickle />
	<plate>
		<pickle />
	</plate>
	<bento>
	<pickle />
	</bento>
	<plate>
		<pickle />
	</plate>
	<pickle />
	<pickle class="small" />
</div>
```

>[!success] plate, bento

---
# Level 10 - Select All The Things!

>[!question]
># The Universal Selector
>You can select **everything**!
>`*`
>You can select all elements with the universal selector!

![[Pasted image 20261028233937.png]]

```html
<div class="table">
	<apple />
	<plate>
		<orange class="small" />
	</plate>
	<bento />
	<bento>
		<orange />
	</bento>
	<plate id="fancy" />
</div>
```

>[!success] `*`

---
# Level 11 - Select Everything On A Plate

>[!question]
># Combine the Universal Selector
>`A *`
>This selects all elements inside A.

![[Pasted image 20261028234153.png]]

```html
<div class="table">
	<plate id="fancy">
		<orange class="small" />
	</plate>
	<plate>
		<pickle />
	</plate>
	<apple class="small" />
	<plate>
		<apple />
	</plate>
</div>
```

>[!success] plate *

---
# Level 12 - Select Every Apple That's Next To A Plate

>[!question]
># Adjacent Sibling Selector
>Select an element that directly follows another element.
>`A + B`
>This selects all **B** elements that directly follow **A**. Elements that follow one another are called siblings. They're on the same level, or depth.
>
>In the HTML markup for this level, elements that have the same indentation are siblings.

![[Pasted image 20261028234339.png]]

```html
<div class="table">
	<bento>
		<apple class="small" />

	</bento>
	<plate />
		<apple class="small" />
	<plate />
	<apple />
	<apple class="small" />
	<apple class="small" />
</div>
```

>[!success] plate + apple

---
# Level 13 - Select The Pickles Beside The Bento

>[!question]
># General Sibling Selector
>Select elements that follows another element,
>`A ~ B`
>You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets **all** of the following elements instead of **one**.

![[Pasted image 20261028235628.png]]

```html
<div class="table">
	<pickle />
	<bento>
		<orange class="small" />
	</bento>
	<pickle class="small" />
	<pickle />
	<plate>
		<pickle />
	</plate>
	<plate>
		<pickle class="small" />
	</plate>
</div>
```

>[!success] bento ~ pickle

---
# Level 14 - Select The Apple Directly On A Plate

>[!question]
># Child Selector
>Select direct children of an element.
>`A > B`
>You can select elements that are direct children of other elements. 
>
>A child element is any element that is nested directly in another element.
>
>Elements that are nested deeper than that are called descendant elements.

![[Pasted image 20261029201330.png]]

```html
<div class="table">
	<plate>
		<bento>
			<apple />
		</bento>
	</plate>
	<plate>
		<apple />
	</plate>
	<plate />
	<apple />
	<apple class="small" />
</div>
```

>[!success] plate > apple

---
# Level 15 - Select The Top Orange

>[!question]
># First Child Pseudo Selector
>Select a first child element inside of another element.
>`:first-child`
>You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.

![[Pasted image 20261029202036.png]]

```html
<div class="table">
	<bento />
	<plate />
	<plate>
		<orange />
		<orange />
		<orange />
	</plate>
	<pickle class="small" />
</div>
```

>[!success] plate orange:first-child

---
# Level 16 - Select The Apple & The Pickle On The Plates

>[!question]
># Only Child Pseudo Selector
>Select an element that are the only element inside of another one.
>`:only-child`
>You can select any element that is the only element inside of another one.

![[Pasted image 20261029203001.png]]

```html
<div class="table">
	<plate>
		<apple />
	</plate>
	<plate>
		<pickle />
	</plate>
	<bento>
		<pickle />
	</bento>
	<plate>
		<orange class="small" />
		<orange />
	</plate>
	<pickle class="small" />
</div>
```

>[!success] plate > :only-child

---
# Level 17 - Select The Small Apple & The Pickle

>[!question]
># Last Child Pseudo Selector
>Select the last element inside of another element.
>`:last-child`
>You can use this selector to select an element that is the last child element inside of another element.

![[Pasted image 20261029203611.png]]

```html
<div class="table">
	<plate id="fancy">
		<apple class="small" />
	</plate>
	<plate />
	<plate>
		<orange class="small" />
		<orange />
	</plate>
	<pickle class="small" />
</div>
```

>[!success] .small:last-child

---
# Level 18 - Select The 3rd Plate

>[!question]
># Nth Child Pseudo Selector
>Select an element by its order in another element.
>`:nth-child(A)`
>Selects the `nth` (Ex: 1st, 3rd, 12th, etc.) child element in another element.

![[Pasted image 20261029204317.png]]

```html
<div class="table">
	<plate />
	<plate />
	<plate />
	<plate id="fancy" />
</div>
```

>[!success] plate:nth-child(3)

---
# Level 19 - Select The First Bento

>[!question]
># Nth Last Child Selector
>Select an element by its order in another element counting from the back.
>`:nth-last-child(A)`
>Selects the children from the bottom of the parent. Like `nth-child` but going from the last element not the first.

![[Pasted image 20261029215904.png]]

```html
<div class="table">
	<plate />
	<bento />
	<plate>
		<orange />
		<orange />
		<orange />
	</plate>
	<bento />
</div>
```

>[!success] bento:nth-last-child(3)

---
# Level 20 - Select First Apple

>[!question]
># Nth of Type Selector
>Select the first element of a specific type.
>`:first-of-type`
>Selects the first element of that type within another element.



![[Pasted image 20261029220510.png]]

```html

```

>[!success] apple:first-of-type

---
# Level 21 - Select All Even Plates

>[!question]
>

![[Pasted image 20261029220722.png]]