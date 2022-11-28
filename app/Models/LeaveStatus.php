<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveStatus extends Model
{
    use HasFactory;

    protected $fillable = ['emp_id','approver_id','leave_from_date','leave_to_date','subject','status','remarks','date'];
}
