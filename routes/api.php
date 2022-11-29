<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;



Route::post('/emp_login',[MainController::class,"EMP_LOGIN"]);
Route::get('/create_sample_hr',[MainController::class,"CREATE_HR"]);


Route::group(['middleware' => 'custom.auth'], function () {
    Route::post('/apply_leave_status',[MainController::class,"APPLY_LEAVE_STATUS"]);
    Route::post('/create_leavform',[MainController::class,"CREATE_LEAVEFORM"]);
    Route::post('/create_user',[MainController::class,"CREATE_USER"]);
    Route::get('/get_employee',[MainController::class,"GET_EMPLOYEE"]);
    Route::post('/get_my_leaveform',[MainController::class,"GET_MY_LEAVEFORM"]);
    Route::get('/get_leaveform',[MainController::class,"GET_LEAVEFORM"]);
});


