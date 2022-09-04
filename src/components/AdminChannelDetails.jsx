import React from 'react'

const AdminChannelDetails = (props) => {
    return (
        <div>
            <div className=''>
                <h1 className='bg-slate-600 mx-auto rounded text-white m-3 w-60'>Channel Details</h1>
                <table class="table border border-black container">
                    <thead>
                        <tr className='border border-black'>
                            <th className='border border-black'>Profile </th>
                            <th className='border border-black'>Channel Name</th>
                            <th className='border border-black'>Description</th>
                            <th className='border border-black'>Subscribers</th>
                            {/* <th className='border border-black'>Logo</th> */}
                            {/* <th className='border border-black'>Video Count</th> */}
                            {/* <th className='border border-black'></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((details) => {
                            return (
                                <>
                                    <tr>
                                        <td className='border w-20 border-black'><img className='h-20 w-20 mx-auto p-2 rounded-full' src={details.dp} alt="" /></td>
                                        <td className='border border-black'>{details.channelTitle}</td>

                                        <td className='border border-black h-20'>{details.channelDescription}</td>

                                        <td className='border border-black'>{details.subscriberCount}</td>
                                        {/* <td className='border border-black'>Malcolm Lockyer</td> */}
                                        {/* <td className='border border-black'></td> */}
                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminChannelDetails