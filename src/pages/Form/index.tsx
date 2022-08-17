import React from 'react'
import FormControl from '@/features/Form/components/FormControl'
import FormHelper from '@/features/Form/components/FormHelper'
import FormInput from '@/features/Form/components/FormInput'
import FormLabel from '@/features/Form/components/FormLabel'
import useInput from '@/features/Form/hooks/useInput'
import useUploadImage from '@/features/Form/hooks/useUploadImage'

const Form = () => {
  const [domain, , onChangeDomain] = useInput()
  const [name, , onChangeName] = useInput()
  const { imgData, handleUplodaImage } = useUploadImage()

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col border bg-white">
      <div className="flex h-full min-h-[calc(100vh)] w-full flex-col justify-between pb-2">
        <div>
          <FormControl id="profile" className="w-full shrink-0 p-2" isRequired isDisabled>
            <FormLabel>프로필 이미지 등록</FormLabel>
            <FormInput
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none "
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handleUplodaImage}
            />
          </FormControl>
          <div className="flex w-full justify-center overflow-hidden ">
            <img
              className={`${imgData ? '' : 'hidden'} aspect-square w-1/2 rounded-full p-2`}
              alt="preview"
              src={imgData}
            />
          </div>
          <FormControl className="flex w-full shrink-0 flex-col gap-3 p-2" isRequired>
            <div>
              <FormLabel>가게명</FormLabel>
              <FormInput className="w-full" value={name} onChange={onChangeName} />
              <FormHelper variant="normal">프로필에 보여줄 가게명을 입력해주세요 :)</FormHelper>
            </div>
            <div>
              <FormLabel>가게 설명</FormLabel>
              <textarea
                rows={4}
                className="block w-full  rounded-lg border bg-gray-50 p-2 text-sm text-gray-900"
                placeholder="프로필에 보여줄 가게에 대한 설명이 필요해요 :)"
              />
            </div>
            <div>
              <FormLabel>도메인</FormLabel>
              <FormInput className="w-full" value={domain} onChange={onChangeDomain} />
              <FormHelper variant="normal">https://dalda.shop/{domain}</FormHelper>
            </div>
          </FormControl>
        </div>
        <button
          form="profile"
          type="submit"
          className="w-full rounded-md bg-blue-500 p-3 text-white hover:bg-blue-400"
        >
          확인
        </button>
      </div>
    </main>
  )
}

export default Form
