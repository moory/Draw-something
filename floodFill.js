//Flood-fill (node, target-color, replacement-color):
//1. If target-color is equal to replacement-color, return.
//2. If the color of node is not equal to target-color, return.
//3. Set the color of node to replacement-color.
//4. Perform Flood-fill (one step to the south of node, target-color, replacement-color).
//   Perform Flood-fill (one step to the north of node, target-color, replacement-color).
//   Perform Flood-fill (one step to the west of node, target-color, replacement-color).
//   Perform Flood-fill (one step to the east of node, target-color, replacement-color).
//5. Return.


//Flood-fill (node, target-color, replacement-color):
function floodFill(data,node,targetColor,replacementColor){
//1. If target-color is equal to replacement-color, return.
    if(targetColor==replacementColor) return;
//2. Set Q to the empty queue.
    var q=[];var hash={};
//3. Add node to the end of Q.
    q.push(node);
//4. While Q is not empty:
    while(q.length){
        //5. Set n equal to the first element of Q.
        var n = q[0];
        //6. Remove first element from Q.
        q.shift();
        //7. If the color of n is equal to target-color:
        if(color(data,n)==targetColor){
            //8. Set the color of n to replacement-color and mark "n" as processed.
            setColor(data,n,replacementColor);
            hash[n]=1;
            //9. Add west node to end of Q if west has not been processed yet.
            if(hash[n-4]==undefined){q.push(n-4)}
            //10. Add east node to end of Q if east has not been processed yet.
            if(hash[n+4]==undefined){q.push(n+4)}
            //11. Add north node to end of Q if north has not been processed yet.
            if(hash[n-2000]==undefined){q.push(n-2000)}
            //12. Add south node to end of Q if south has not been processed yet.
            if(hash[n+2000]==undefined){q.push(n+2000)}
        }

    }
//13. Return.
    return;
}


//Flood-fill (node, target-color, replacement-color):
//1. Set Q to the empty queue.
//2. If the color of node is not equal to target-color, return.
//3. Add node to Q.
//4. For each element N of Q:
    //5. Set w and e equal to N.
    //6. Move w to the west until the color of the node to the west of w no longer matches target-color.
    //7. Move e to the east until the color of the node to the east of e no longer matches target-color.
    //8. For each node n between w and e:
        //9. Set the color of n to replacement-color.
        //10. If the color of the node to the north of n is target-color, add that node to Q.
        //11. If the color of the node to the south of n is target-color, add that node to Q.
//12. Continue looping until Q is exhausted.
//13. Return.

//===============
function color(data,node){
    return ""+data.data[node]+","+data.data[node+1]+","+data.data[node+2]+","+data.data[node+3];
}
function setColor(data,node,replacementColor){
	var color=replacementColor.split(",");
    data.data[node]=color[0];
    data.data[node+1]=color[1];
    data.data[node+2]=color[2];
    data.data[node+3]=color[3];
}
