 
 
import React, { FunctionComponent } from 'react'
import NftItem from '../item'
import { NftMeta } from '@/types/nft'

type NftListProps = {
    nfts: NftMeta[]
}

const NftList:FunctionComponent<NftListProps> = ({nfts}) =>  {
    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            { nfts.map(nft => 
                <div key={nft.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <NftItem item={nft}/>
                </div>
            )}
      </div>
    )
}

export default NftList