import React from 'react'
import Layout from '../components/Layouts/Layout'
import CustomSlider from '../utils/CustomeSlide'
import CardList from '../components/Lists/CardList'
import { ListLabtop , ListPhone } from '../constant/Contant'

const Products = () => {
    return (
        <Layout>
            {/* Mobiles */}
            <div className='px-[48px] py-20'>
                <div className='pb-10'>
                    <h2 className='text-[24px] font-bold text-center pb-5'>Apple Mobile Phone</h2>
                    <CustomSlider>
                        {
                            ListPhone?.map((list, index) => (
                                <CardList ind={index} list={list} />
                            ))
                        }
                    </CustomSlider>
                </div>
                {/* Labtops */}
                <div className=''>
                <h2 className='text-[24px] font-bold text-center pb-10'>Latops , Apple Mac Books </h2>
                    <CustomSlider>
                        {
                            ListLabtop?.map((list, index) => (
                                <CardList ind={index} list={list} />
                            ))
                        }
                    </CustomSlider>
                </div>
            </div>
        </Layout>
    )
}

export default Products