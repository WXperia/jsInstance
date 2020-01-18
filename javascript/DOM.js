/**
 * dom 节点的遍历
 */

//  获得所有的子节点

function getChild (root){
    var a = root.children
    getall(children,root)
    console.log(root)
}
function getall(children,root) {
    for(var i = 0;i <= children.length -1; i++){
        var child = children[i]
        console.log(`父节点：${root}子节点:${child}`)
        child.children&&getChild(child,root)
    }
}