import {getAuth,signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./fbconfig"
import {getDatabase} from  "firebase/database"

let db= getDatabase(app)
let auth =getAuth(app)
export let fbLogin=(body)=>{
    return new Promise ((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Please enter email and password first")
        }else{
            signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid
                // body.id = id

                const reference = ref(db,`users/${id}`)
                onValue(reference,(data)=>{
                        if(data.exists()){
                            resolve(data.val) //val raw  form me data laega
                        }else{
                            reject("user is not found")
                        }
                })

            }).catch(err=>{
                reject(err)
                // console.log(err)
            })
        }

    })
}
export let fbAuth=()=>{
    return new Promise((reject,resolve)=>{
        
        onAuthStateChanged(auth, (user) => {
          if (user) {
           
            const uid = user.uid;
            resolve(uid)
          } else {
           reject("no user is logged in")
          }
        });
    })
    }
export let fbSignUp=(body)=>{
        return new Promise ((resolve,reject)=>{
            if(!body.email || !body.password){
                reject("Please enter email and password first")
            }else{
                createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                    let id = res.user.uid
                    body.id = id
                    const reference = ref(db,`users/${id}`)
                    set(reference,body).then(user=>{
                        resolve("user created successfully")
                    }).catch(error=>{
                        reject(error)
                    })  
                    console.log(res)
    
                }).catch(err=>{
                    reject(err)
                    // console.log(err)
                })
            }
    
        })
    }