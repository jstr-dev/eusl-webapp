<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    protected $appends = ['short'];

    public function getShortAttribute()
    {
        switch ($this->division) {
            case 'Professional':
                return 'Pro';
            case 'Intermediate':
                return 'Inter';
            default:
                return $this->division;
        }
    }
}
