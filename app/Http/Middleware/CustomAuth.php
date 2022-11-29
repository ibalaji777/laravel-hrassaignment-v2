<?php

namespace App\Http\Middleware;
use App\Models\Employee;
use Closure;
use Illuminate\Http\Request;

class CustomAuth
{

    public function handle(Request $request, Closure $next)
    {
       $username=request()->header('Username');
       $password=request()->header('Password');
        $emp=Employee::where('password',$password)->where("phone",$username)->orWhere("email",$username);
        if(!$emp->exists())
        {
            return response(["login"=>'Auth failed'],200);

        }
        return $next($request);
    }
}
