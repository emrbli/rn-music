import { View, Image, Text } from "react-native"
import React from 'react'


export type SongCardProps = {
    id: string,
    title: string,
    artist: string,
    album: string,
    year: number,
    isSoldOut: boolean,
    imageUrl: string
}

export const SongCard: React.FC<SongCardProps> = ({
    id,
    title,
    artist,
    album,
    year,
    isSoldOut,
    imageUrl
}: SongCardProps): JSX.Element => {
    return (
        <View className="flex flex-row gap-1 m-1">
            <View className="flex grow-0">
                <Image source={{ uri: imageUrl }} className="w-20 h-20 rounded-full" />
            </View>
            <View className="flex grow flex-col">
                <Text className="text text-purple-600 text-lg font-bold">{title}</Text>
                <View className="flex flex-row gap-2 justify-start">
                    <Text>{artist}</Text>
                    <Text className="font-light">{year}</Text>
                </View>
                {isSoldOut &&
                    <View className=" m-2 items-end" >
                        <View className="border rounded-lg p-1 border-red-600">
                            <Text className="text-red-600">SOLD OUT</Text>
                        </View>
                    </View>
                }
            </View>

        </View>
    )
}