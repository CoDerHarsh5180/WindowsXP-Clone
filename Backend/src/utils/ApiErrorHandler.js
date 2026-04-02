class Apierror extends Error{
     constructor(status=400,message="something went wrong",name){
          super()
          this.status=status,
          this.message=message,
          this.name=name
     }
}

export {Apierror}