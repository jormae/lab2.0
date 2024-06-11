import { NextResponse, NextRequest } from 'next/server'
import pool from '../../../config/db'

const jwt = require("jsonwebtoken");
const secret = "lab2.0";

export async function  GET( request, {params} ) {
    const username = params.username // 2021-03-15
    console.log('username = '+params.username)

  try {
      const db = await pool.getConnection()
      const query = 'SELECT * FROM user u  WHERE u.username = ?'
      const [rows] = await db.execute(query, [username])
      db.release()     
      return NextResponse.json(rows)
  } catch (error) {
      return NextResponse.json({
          error: error
      }, { status: 500 })
  }
}

export async function PUT( request, {params} ) {

    const username = params.username // 2021-03-15
    // const { fullname, telephone, email, officerposition } = await request.json()
    // console.log('req = '+ await request.json())
    // console.log('username = '+username)
    // console.log('fullname = '+fullname)
    // return NextResponse.json({status:'success', message:username})

    // const responseBody = await request.json();
    // console.log(responseBody);
    // return responseBody;
    // return NextResponse.json('hi')
    return NextResponse.json({status: 'success', message: "เข้าสู่ระบบสำเร็จ!", username: username}, { status:200 })
    // return NextResponse.json({status:'success', message:'hi'})

//   try {
//       const db = await pool.getConnection()
//       const query = 'UPDATE user SET fullname = ?, telephone = ?, email = ?, officerposition = ? WHERE username = ?'
//       await db.execute(query, [fullname, telephone, email, officerposition, username],function(err, result) {
//         console.log("Connex Query Inside Result: ", result);
//         if (err) throw err;
//         //mysqlConnection.destroy();
//         return NextResponse.json(err)})
//       db.release()     
//     //   if(err){
//     //     return NextResponse.json(err)
//     //   }
//       return NextResponse.json({status:'success', message:'yes'})
//   } catch (error) {
//       return NextResponse.json({
//           error: error
//       }, { status: 500 })
//   }
}
  