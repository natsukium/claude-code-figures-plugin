{
  description = "Development environment for the figures Claude Code plugin";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
    git-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.flake-compat.follows = "";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    mermaid-rs-renderer = {
      url = "github:1jehuang/mermaid-rs-renderer";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];

      imports = [
        inputs.git-hooks.flakeModule
        inputs.treefmt-nix.flakeModule
      ];

      perSystem =
        {
          config,
          pkgs,
          inputs',
          ...
        }:
        {
          treefmt = {
            projectRootFile = "flake.nix";
            programs = {
              nixfmt.enable = true;
              oxfmt.enable = true;
            };
            settings.global.excludes = [
              "hooks/vendor/**"
              "pnpm-lock.yaml"
              "LICENSE"
            ];
          };

          pre-commit = {
            check.enable = true;
            settings = {
              src = ./.;
              hooks = {
                actionlint.enable = true;
                nil.enable = true;
                oxlint.enable = true;
                treefmt.enable = true;
              };
            };
          };

          devShells.default = pkgs.mkShell {
            packages = [
              pkgs.nodejs
              pkgs.pnpm
              pkgs.resvg
              pkgs.graphviz
              pkgs.d2
              pkgs.imagemagick
              inputs'.mermaid-rs-renderer.packages.default
            ];
            shellHook = config.pre-commit.installationScript;
          };
        };
    };
}
