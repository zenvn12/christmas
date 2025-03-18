-- Script to highlight all players in the game
local Players = game:GetService("Players")

-- Function to highlight a player
local function highlightPlayer(player)
    if player.Character then
        local highlight = Instance.new("Highlight")
        highlight.Parent = player.Character
        highlight.FillColor = Color3.fromRGB(255, 255, 0) -- Yellow highlight
        highlight.OutlineColor = Color3.fromRGB(0, 0, 0) -- Black outline
        highlight.DepthMode = Enum.HighlightDepthMode.Occluded
    end
end

-- Apply highlight to all existing players
for _, player in pairs(Players:GetPlayers()) do
    highlightPlayer(player)
end

-- Listen for new players joining
Players.PlayerAdded:Connect(function(player)
    player.CharacterAdded:Connect(function()
        highlightPlayer(player)
    end)
end)
