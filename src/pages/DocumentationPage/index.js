import React from 'react'


import Header from '../../components/Main/TitleText'
import MethodAbout from '../../components/ApiComponents/ApiMethodBody'
import SubHeader from '../../components/ApiComponents/ApiMethodTitle'
import CodeBlock from '../../components/ApiComponents/ApiCodeBlock'

import { apiLink } from '../../api'
import { apiList } from '../../api/apiDescription'


const DocumentationPage = () => {

  return (
    <>
      <div className="bg-gray-100 w-full py-16 px-8 mb-8 rounded-md">
        <Header title={'Документація з використання API'} />
      </div>

      <MethodAbout
        text={
          'На цій сторінці ви знайдете необхідну інформацію, щодо використання API'
        }
      />
      {apiList.map((api, index) => (
        <div key={index}>
          <SubHeader title={api.name} />
          <MethodAbout text={api.description} />
          <CodeBlock code={apiLink + api.name} title={'Request'} />
          <CodeBlock
            code={JSON.stringify(api.response, null, 2)}
            title={'Response'}
          />
        </div>
      ))}
    </>
  )
}

export default DocumentationPage
