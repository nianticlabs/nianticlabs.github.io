#!/bin/bash
echo $1"_bd_hypersim.mp4"

./tile_one.sh 08_11_2022-09_08_19_CBFB8BB5-F00C-4B93-8930-7E0E222F9B1A_map_lidar_o0_icon_map _bd_hypersim _sr_hypersim _npy_lidar_depths_equally_sampled_2000 _lidar;
./tile_one.sh 08_11_2022-09_19_35_30488245-8AAC-4104-8707-3FB133E12F54_map_lidar_o0_icon_map _bd_hypersim _sr_hypersim _npy_lidar_depths_equally_sampled_2000 _lidar;
./tile_one.sh 11_11_2022-13_19_39_CE673EF7-6BF3-4051-9CEA-D446BA82106C_map_lidar_o0_sphere _bd_hypersim _sr_hypersim _npy_lidar_depths_equally_sampled_2000 _lidar;
./tile_one.sh 24_10_2022-15_01_45_CBD0B02E-D514-4642-A3F4-313AA1AFD0EC_map_lidar_o0_air_balloon _bd_hypersim _sr_hypersim _npy_lidar_depths_equally_sampled_2000 _lidar;
./tile_one.sh 24_10_2022-15_04_09_9BF18519-D4D3-45CD-BF16-9E6AA09E2BEE_map_lidar_o0_air_balloon _bd_hypersim _sr_hypersim _npy_lidar_depths_equally_sampled_2000 _lidar;