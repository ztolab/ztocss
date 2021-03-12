// Based on github.com/necolas/normalize.css
const basic = `
body,blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {
  margin: 0
}

body {
  font-family: inherit;
  line-height: inherit
}

h1,h2,h3,h4,h5,h6 {
  font-size: inherit;
  font-weight: inherit
}

ol,ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  background-color: inherit;
  text-decoration: inherit;
}

audio,canvas,embed,iframe,img,object,svg,video {
  display: block;
}

*,::before,::after {
  border-width: 0;
  border-style: solid;
  border-color: inherit;
  box-sizing: border-box;
}

*{
  --zto-shadow: 0 0 #0000;
  --zto-ring-inset: var(--zto-empty, );
  --zto-ring-offset-color: #fff;
  --zto-ring-color: rgba(59, 130, 246, 0.5);
  --zto-ring-offset-shadow: 0 0 #0000;
  --zto-ring-offset-width: 0px;
  --zto-ring-shadow: 0 0 #0000;
}

*[class*='line-clamp']{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

button {
  background-color: inherit;
  cursor: pointer
}

@keyframes spin{
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

@keyframes ping{
  75%, 100% {transform: scale(2); opacity: 0;}
}

@keyframes pulse{
  0%, 100% {opacity: 1;}
  50% {opacity: .5;}
}

@keyframes bounce{
  0%, 100% {transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);}
  50% {transform: translateY(0); animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);}
}
`
module.exports = function(self) {
  return basic
}
