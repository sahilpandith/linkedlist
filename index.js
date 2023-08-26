function Node(value=null,nextNode=null) {
      return {
         value,
         nextNode,
      }
}

class LinkedList {
     list = undefined;
     append(value){
        const node = Node(value);
       if(!this.list){
           this.list = node;
       }else {
            let lastNode = this.list; 
            while(lastNode.nextNode){
                lastNode = lastNode.nextNode;
            }
            lastNode.nextNode = node;
       }
     }
     prepend(value){
         this.list = Node(value, this.list);
     }
     size(){
         let count =0;
         if(!this.list) return 0;
         let node = this.list;
         while(node!=null){
            count+=1;
            node = node.nextNode;
         }
         return count;
         
     }
     head(){
         return this.list.value;
     }
     tail(){
        if(!this.list) return undefined;
        let node = this.list;
        while(node.nextNode){
           node = node.nextNode;
        }
        return node.value;
     }
     at(index){
       if(!this.list) return -1;
       let i =0;
       let node = this.list
       while(node!==null){
            if(i===index){
                return node;
            }
            i++
            node= node.nextNode;
       }
       return -1;
     }
     find(value){
        if(!this.list) return null;
        let index =0;
        let node = this.list;
        while(node!==null){
            if(node.value===value){
                return index
            }
            index++;
           node = node.nextNode;
        }
        return null
     }
     pop(){
        if(!this.list) return undefined;
        let node = this.list;
        let secondLastNode;
        while(node.nextNode){
           secondLastNode =node;
           node = node.nextNode;
        }
        secondLastNode.nextNode=null;
        return node;
     }
     contains(value){
        if(!this.list) return false;
        let node = this.list;
        while(node!==null){
            if(node.value===value){
                return true
            }
           node = node.nextNode;
        }
        return false;
     }
     toString(){
         let linkedListStr = ""
         let node = this.list;
         while(node!==null){
            linkedListStr += `${node.value} -> `;
            node = node.nextNode;
         }
         linkedListStr += `-> null`;
         return linkedListStr;
     }

     insertAt(value, index){
        if(!this.list) return false;
        let node = this.list;
        let prev
        let _index =0;
        let found = false;
        while(node!==null){
            if(_index===index){
                found = true;
                break;
            }
            _index++;
            prev=node;
            node = node.nextNode;
        }
        if(found){
            if(!prev){
               this.prepend.call(this,value);
            }else{
                const newNode = Node(value,prev.nextNode);
                prev.nextNode = newNode;
            }
        }
        if(_index+1===index){
            found = true;
            const newNode = Node(value);
            prev.nextNode= newNode;
        }
        return found;
     }
     removeAt(index){
        if(!this.list) return false;
        let node = this.list;
        let prev
        let _index =0;
        let found = false;
        while(node!==null){
            if(_index===index){
                found = true;
                break;
            }
            _index++;
            prev=node;
            node = node.nextNode;
        }
        if(found){
            if(!prev){
               this.list.value= this.list.nextNode.value;
               this.list.nextNode = this.list.nextNode.nextNode;
            }else{
                prev.nextNode = prev.nextNode.nextNode;
            }
        }
        return found;
     }
}

const ll = new LinkedList();
console.log(ll.size());
ll.append('sahil');
ll.append(22);
ll.append('romit'); 
ll.append('vibu'); 
ll.prepend('goldi');
console.log("=======size========")
console.log(ll.size());

console.log("=======head========")
console.log(ll.head());

console.log("=======tail========")
console.log(ll.tail());
console.log("=======pop========")
console.log(ll.pop());

console.log("=======conatins========")

console.log(ll.contains("something"));
console.log(ll.contains(22));

console.log("=======toString========")
console.log(ll.toString());

console.log("==========at=========");
console.log(ll.at(0));
console.log(ll.at(2));

console.log("==========insertat=========");
console.log(ll.insertAt('insert at 1',1));
console.log(ll.insertAt('insert at 6',6));
console.log(ll.insertAt('insert at 5',5));
console.log(ll.insertAt('insert at 0',0));

console.log("=======toString========")
console.log(ll.toString());

console.log("==========removeat=========");
console.log(ll.removeAt(5));
console.log(ll.removeAt(0));

console.log("=======toString========")
console.log(ll.toString());

console.log("==========find=========");
console.log(ll.find('goldi'));
console.log(ll.find(22));