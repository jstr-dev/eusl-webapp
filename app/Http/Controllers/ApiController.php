<?php

namespace App\Http\Controllers;

use App\Facades\ApiResponse;
use App\Models\Player;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getPlayer(Request $request)
    {
        $slapshotId = $request->get('slapshot_id');
        if (!$slapshotId || !is_numeric($slapshotId)) {
            return ApiResponse::badRequest('You must supply a valid slapshot_id parameter');
        }

        $player = Player::query()->where('slapshot_id', '=', $slapshotId)->first();
        if (!$player) {
            return ApiResponse::notFound('Player was not found with slapshot_id ' . $slapshotId);
        }

        return response()->json($player);
    }

    public function putPlayer(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slapshot_id' => ['required', 'integer'],
        ]);

        $slapshotId = $request->get('slapshot_id');
        $player = Player::find($slapshotId);

        if ($player) {
            return ApiResponse::badRequest('Player with slapshot_id ' . $slapshotId . ' already exists');
        }

        $player = new Player();
        $player->slapshot_id = $slapshotId;
        $player->name = $request->get('name');
        $player->save();

        return response()->json($player, 201);
    }

    public function patchPlayer(Request $request)
    {
        $request->validate([
            'slapshot_id' => ['required', 'integer'],
        ]);

        $slapshotId = $request->get('slapshot_id');
        $player = Player::query()->where('slapshot_id', '=', $slapshotId)->first();

        if (!$player) {
            return ApiResponse::notFound('Player was not found with slapshot_id ' . $slapshotId);
        }

        $player->name = $request->get('name');
        $player->save();

        return response()->json($player);
    }
}
