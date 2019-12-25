
            function dragStart() {
                event.dataTransfer.setData("text", event.target.id);
            }
            function dragallowDrop() {
                event.preventDefault();
            }
            function dragdropItem(event) {
                event.preventDefault();
                console.log(event);
                console.log(event.target);
                var textNode = document.createTextNode(event.target.id);
                if (event.target.id == 'dragslot3') {
                    textNode = document.createTextNode('slot 3 is correct!!!!');
                }
                if (!dragball.childNodes[0]) {
                    dragball.appendChild(textNode);
                }
                else {
                    dragball.replaceChild(textNode, dragball.childNodes[0]);
                }
                event.target.appendChild(dragball);
                
            }
        