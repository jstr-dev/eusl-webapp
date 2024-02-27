<?php

namespace App\Http\Traits;

use App\Models\Season;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

trait PaginationTrait
{
    /**
     * Retrieves pagination parameters from the request.
     *
     * @param Request $request
     * @return array
     */
    public function getPaginationParameters(Request $request): array
    {
        $page = (int) $request->get('page', 1);
        $per_page = (int) $request->get('per_page', 15);
        $seasons = Cache::remember('seasons', 3600, fn () => (Season::query()->orderBy('number', 'desc')->orderBy('division')->get()));
        $current_season = (int) $request->get('season', $seasons[0]?->number);
        $current_division = (int) $request->get('division', 1);
        $season_id = Season::query()->where('number', $current_season)->where('division', $current_division)->pluck('id')->first();
        $search = $request->get('search') ?? false;

        return array($page, $per_page, $seasons, $current_season, $current_division, $season_id, $search);
    }


}
