export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">Type: {nft.id.tokenMetadata.tokenType}</p>
                <p className="text-gray-600" >Contract: {`${nft.contract.address.substr(0, 4)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`} <button onClick={() => {navigator.clipboard.writeText(nft.contract.address)}}><img src={'https://cdn-icons-png.flaticon.com/512/126/126498.png'} style={{width: "15px"}}/></button></p>

            </div>

            <div className="flex-grow mt-2">
            <a href={ `https://etherscan.io/address/${nft.contract.address}` } style={{"background-color": "#007fff", "color": "#ffffff", "padding": "0.5rem", "border-radius": "5px"}} target="_blank">View on Etherscan</a>
            </div>
        </div>

    </div>
    )
}