import React from 'react'

import TitleText from '../../components/Main/TitleText'
import MethodAbout from '../../components/ApiComponents/ApiMethodBody'
import SubHeader from '../../components/ApiComponents/ApiMethodTitle'
import CodeBlock from '../../components/ApiComponents/ApiCodeBlock'

import { apiLink } from '../../api'
import { apiList } from '../../api/apiDescription'

const DocumentationPage = () => {
  return (
    <>
      <TitleText title={'Документація з використання API'} haveSearch={true} inline={true}/>

      <div className="px-4 md:px-8 lg:px-16 transition-all">
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
            <MethodAbout text={'Response with descriptions:'} />
            <CodeBlock
              code={JSON.stringify(api.response, null, 2)}
              title={'Response'}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default DocumentationPage
