#!/usr/bin/perl
use strict;
use warnings;
use File::Slurp;

my $path = "/home/anthony/Workspace/Java/MCMap/src/main/java/com/centuryglass/mcmap/worldinfo/Biome.java";
my $text = read_file($path);

my @biomes = ($text =~ /colorMap.put\((.*?,\s+new Color[^;]+);/gs);
print ("Found ".(scalar @biomes)." biomes\n");
foreach my $match (@biomes)
{
    my $biome;
    my $color;
    if ($match =~ /([A-Z]+(:?_[A-Z]+)*),/)
    {
        $biome = $1;
    }
    else
    {
        die("No biome in $match\n");
    }
    if ($match =~ /0x(..), 0x(..), 0x(..)/)
    {
        $color = "#".$1.$2.$3;
    }
    else
    {
        die("No color in $match\n");
    }
    system("convert -size 8x8 xc:$color png32:$biome.png");
}
