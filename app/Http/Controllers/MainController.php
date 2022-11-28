<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\LeaveStatus;
class MainController extends Controller
{


    public function CREATE_HR(Request $request)
    {
        $sampleHR=[
            'name' => 'hr',
             'phone' => '8888888888',
             'email' => 'hr',
             'password' => 'hr',
             'role'=>'HR'
        ];

         $emp=Employee::where("phone",$sampleHR['phone'])->where("email",$sampleHR['email']);
         if(!$emp->exists())
    {
        $result=Employee::create($sampleHR);
        $response=[
            'status'=>true,
             'msg'=>"Hr  Created",
        ];
        return  response($response,200);
    }
    $response=[
        'status'=>false,
        'msg'=>"Already Created",
    ];
    return  response($response,200);
    }



    public function CREATE_LEAVEFORM(Request $request)
    {
        $validated = $request->validate([
            'emp_id' => 'required',
            'leave_from_date' => 'required',
            'leave_to_date' => 'required',
            'subject'=>'required',
            'remarks'=>'required'
        ]);

        $input = $request->all();
        $input['status']='PENDING';

        $result=LeaveStatus::create($input);

        $response=[
            'status'=>true,
            'msg'=>"Employee Created",

        ];

        return  response($response,200);
    }




    public function CREATE_USER(Request $request)
    {
        $validated = $request->validate([
           'name' => 'required',
            'phone' => 'required|string|unique:employees,phone',
            'email' => 'required|string|unique:employees,email',
            'password' => 'r equired',
            'role'=>'required'
        ]);

        $input = $request->all();
        $result=Employee::create($input);

        $response=[
            'status'=>true,
            'msg'=>"Employee Created",

        ];

        return  response($response,200);
    }

    public function GET_EMPLOYEE(Request $request)
    {
        $result=Employee::all();

        return  response($result,200);
    }
    public function GET_MY_LEAVEFORM(Request $request)
    {


        $id=$request->input('emp_id');
        $result=LeaveStatus::where('emp_id',$id)->get();

        return  response($result,200);
    }

    public function GET_LEAVEFORM(Request $request)
    {
        $result=LeaveStatus::where('role','!=','HR')->get();

        return  response($result,200);
    }

    public function EMP_LOGIN(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required',
           ]);
           $username=$request->input('username');
           $password=$request->input('password');

           $employee=Employee::where("phone",$username)->orWhere("email",$username)->where("password",$password);

           if($employee->exists()){

            return  response([
                'status'=>true,
                'msg'=>"Successfully Loggedin",
                'data'=>$employee->first()

            ],200);
           }


        return  response([
            'status'=>false,
            'msg'=>"Failed to Login",
        ],200);
    }

}
