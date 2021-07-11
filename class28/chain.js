class chain{

constructor(bodyA,pointB){
 var  option={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:10


}

this.pointB=pointB
this.body= Constraint.create(option)

World.add(world,this.body)


}

flying(){

this.body.bodyA=null



}    


display(){
    if(this.body.bodyA){
    var A = this.body.bodyA.position
    var B = this.pointB
    push()
    strokeWeight(10)
    stroke("pink")
    line(A.x,A.y,B.x,B.y)
    pop()
   }
}






}