<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

//use App\Models\Passport\AuthCode;
//use App\Models\Passport\Client;
//use App\Models\Passport\PersonalAccessClient;
//use App\Models\Passport\RefreshToken;
//use App\Models\Passport\Token;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Passport::loadKeysFrom(__DIR__ . '/../secrets/oauth');

        Passport::tokensExpireIn(now()->addYears(2));
        Passport::refreshTokensExpireIn(now()->addYears(2));
        Passport::personalAccessTokensExpireIn(now()->addYears(2));

        Passport::enableImplicitGrant();

//        Passport::tokensCan([
//            'place-orders' => 'Place orders',
//            'check-status' => 'Check order status',
//        ]);
//        Passport::setDefaultScope([
//            'check-status',
//            'place-orders',
//        ]);

//        Passport::useTokenModel(Token::class);
//        Passport::useRefreshTokenModel(RefreshToken::class);
//        Passport::useAuthCodeModel(AuthCode::class);
//        Passport::useClientModel(Client::class);
//        Passport::usePersonalAccessClientModel(PersonalAccessClient::class);
    }
}
