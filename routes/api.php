<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/create_sample_hr',[MainController::class,"CREATE_HR"]);

Route::post('/create_leavform',[MainController::class,"CREATE_LEAVEFORM"]);

Route::post('/create_user',[MainController::class,"CREATE_USER"]);
Route::get('/get_employee',[MainController::class,"GET_EMPLOYEE"]);
Route::post('/get_my_leaveform',[MainController::class,"GET_MY_LEAVEFORM"]);
Route::get('/get_leaveform',[MainController::class,"GET_LEAVEFORM"]);

Route::post('/emp_login',[MainController::class,"EMP_LOGIN"]);
