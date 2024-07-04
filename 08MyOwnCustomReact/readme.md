# My own custom react 
## I have design my own custom react which can render any componet you wish like react
### it is not so much powerfull like the react library but I desigend it for my practice purpose

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My custom react</title>
  </head>
  <body>
    <div id="main_container"></div>
    <script>
      const main = document.querySelector("#main_container");

      reactElement = {
        type: "h1",
        props: {
          style:
            "border: 5px outset red; background-color: lightblue;text-align: center;",
        },
        children: "Hello everyone from my own custom react library",
      };

      const CustomRender = (reactElement, main) => {
        const element = document.createElement(reactElement.type);
        element.innerHTML = reactElement.children;
        for (const prop in reactElement.props) {
          element.setAttribute(prop, reactElement.props[prop]);
        }

        main.appendChild(element);
      };

      CustomRender(reactElement, main);
    </script>
  </body>
</html>

```