<?php

namespace App\Http\Middleware;

use App\Facades\ApiResponse;
use Closure;

class AcceptJson
{
    public function handle($request, Closure $next)
    {
        if (!$request->wantsJson()) {
            return ApiResponse::badRequest('Missing Accept: application/json header');
        }

        return $next($request);
    }
}
