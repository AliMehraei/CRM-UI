<?php

use App\Http\Controllers\Api\v1\UserLoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//API Version 1.0
Route::group(['prefix' => 'v1', 'namespace' => 'API\v1'], function () {
    Route::post('/login', [UserLoginController::class, 'login']);
    Route::post('/register', [UserLoginController::class, 'register']);
    Route::post('/logout', [UserLoginController::class, 'logout']);

//    Route::get('/blabla', function () {
//        // Access token has both "scope no one" and "scope no two" scopes...
//    })->middleware(['auth:api', 'scopes:scope-no-one,scope-no-two']);
//
//        // Access token has either "check-status" or "place-orders" scope...
//   })->middleware(['auth:api', 'scope:check-status,place-orders']);

});
