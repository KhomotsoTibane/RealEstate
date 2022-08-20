import { useEffect, useState } from "react";
import {Flex, Select, Input, Box, Text, Spinner, Button} from "@chakra-ui/react"
import { useRouter } from "next/router";
import {MbCancel} from "react-icons/md"
import Image from "next/image";

import { filterData, getFilterValues } from "../utils/FilterData";


const SearchFilters = ()=>{

    const searchProperties = (filterValues)=>{
        const path = router.pathname
        const {query} = router

        const values = getFilterValues(filterValues)

        values.forEach((item)=>{
            if(item.value && filterValues?.[item.name]){
            query[item.name] = item.value
        }
        })

        router.push({pathname:path, query:query})
    }

    const [filters, setFilters] = useState(filterData)
    return (
        <Flex bg="gray100"  p="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter)=>(
            <Box key={filter.queryName}>

              <Select placeholder ={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e)=>searchProperties({[filter.queryName] : e.target.value}) }
              >
                {filter?.items?.map((item)=>(
                    <option value={item.value} key={item.value}>{item.name}</option>
                ))}
              </Select>
            </Box>
        ))}
        </Flex>
    )
}

export default SearchFilters