<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leave_statuses', function (Blueprint $table) {
            $table->id();
            $table->integer('emp_id');
            $table->string('approver_id');
            $table->date('leave_from_date');
            $table->date('leave_to_date');
            $table->string('subject')->default('');
            $table->string('status')->default('');
            $table->string('remarks')->default('');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leave_statuses');
    }
};
