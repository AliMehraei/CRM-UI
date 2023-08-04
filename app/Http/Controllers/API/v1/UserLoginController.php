<?php


namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserLoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if (auth()->attempt($credentials)) {
            $user = Auth::user();
            $user['token'] = $user->createToken('Laravelia')->accessToken;
            return response()->json([
                'user' => $user
            ], 200);
        }
        return response()->json([
            'message' => 'Invalid credentials'
        ], 402);
    }


    /**
     * @OA\Info(
     *     title="User Registration API",
     *     description="API for registering new users.",
     *     version="1.0.0",
     *     @OA\Contact(
     *         email="contact@example.com",
     *         name="John Doe"
     *     ),
     *     @OA\License(
     *         name="Apache 2.0",
     *         url="https://www.apache.org/licenses/LICENSE-2.0.html"
     *     )
     * )
     */

    /**
     * @OA\Post(
     *     path="/api/v1/register",
     *     summary="Register a new user",
     *     tags={"Authentication"},
     *     @OA\Parameter(
     *         parameter="name",
     *         name="name",
     *         description="user Name",
     *         @OA\Schema(
     *             type="string"
     *         ),
     *         in="query",
     *         required=true
     *     ),
     *     @OA\Parameter(
     *         parameter="email",
     *         name="email",
     *         description="user Email Address",
     *         @OA\Schema(
     *             type="string"
     *         ),
     *         in="query",
     *         required=true
     *     ),
     *     @OA\Parameter(
     *         parameter="password",
     *         name="password",
     *         description="user password min 8 characters",
     *         @OA\Schema(
     *             type="string"
     *         ),
     *         in="query",
     *         required=true
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="User created successfully",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"message", "user"},
     *                 @OA\Property(property="message", type="string", example="User created successfully", description="A success message indicating that the user was created successfully."),
     *                 @OA\Property(property="user", ref="#/components/schemas/User"),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response="422",
     *         description="Validation error",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"message", "errors"},
     *                 @OA\Property(property="message", type="string", example="The given data was invalid.", description="An error message indicating that the provided data was invalid."),
     *                 @OA\Property(property="errors", type="object", example={"email": {"The email address is already in use."}}, description="An object containing validation errors, if any."),
     *             )
     *         )
     *     )
     * )
     */

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ]);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }
}
