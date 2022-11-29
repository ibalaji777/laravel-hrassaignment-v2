<?php

namespace App\Http\Middleware;
use App\Models\Employee;
use Closure;
use Illuminate\Http\Request;

class CustomAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        //-----------------------auth pending---------
       $username=request()->header('Username');
       $password=request()->header('Password');
        $emp=Employee::where('password',$password)->where("phone",$username)->orWhere("email",$username);
        if(!$emp->exists())
        {
            return response(["login"=>'Auth failed'],200);

        }
        //-----------------------auth pending---------
        return $next($request);
    }
}
