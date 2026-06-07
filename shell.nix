{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    nodePackages.npm
    glib
    nss
    nspr
    atk
    at-spi2-atk
    cups
    dbus
    libdrm
    gtk3
    alsa-lib
    expat
    udev
    pango
    cairo
    mesa
    libgbm
    libxkbcommon
    xorg.libX11
    xorg.libXcomposite
    xorg.libXdamage
    xorg.libXext
    xorg.libXfixes
    xorg.libXrandr
    xorg.libxcb
  ];

  shellHook = ''
    export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath [
      pkgs.glib
      pkgs.nss
      pkgs.nspr
      pkgs.atk
      pkgs.at-spi2-atk
      pkgs.cups
      pkgs.dbus
      pkgs.libdrm
      pkgs.gtk3
      pkgs.alsa-lib
      pkgs.expat
      pkgs.udev
      pkgs.pango
      pkgs.cairo
      pkgs.mesa
      pkgs.libgbm
      pkgs.libxkbcommon
      pkgs.xorg.libX11
      pkgs.xorg.libXcomposite
      pkgs.xorg.libXdamage
      pkgs.xorg.libXext
      pkgs.xorg.libXfixes
      pkgs.xorg.libXrandr
      pkgs.xorg.libxcb
    ]}:$LD_LIBRARY_PATH
  '';
}