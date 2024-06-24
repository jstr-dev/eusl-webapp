<?php

namespace App\Facades;

class ApiResponse
{
    public static function notFound(string $message, string $error = null)
    {
        return static::request(404, $message, $error ?? 'Resource not found');
    }

    public static function badRequest(string $message, string $error = null)
    {
        return static::request(400, $message, $error ?? 'Bad request');
    }

    protected static function request(int $code, string $message, string $error = null)
    {
        return response()->json([
            'message' => $message,
            'error' => $error,
            'code' => $code,
        ], $code);
    }
}
