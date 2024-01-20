import React from "react";

const MotiviationComponent = () => {
  return (
    <>
      <section className="lg:m-5 lg:bg-[#1DCEEA] shadow rounded">
        <div>
          <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg lg:bg-[#1DCEEA] shadow md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">Leads Created</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                  71,897
                  <span className="ml-2 text-sm font-medium text-gray-500">from 70,946</span>
                </div>

                <div className="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                  </svg>
                  <span className="sr-only"> Increased by </span>
                  12%
                </div>
              </dd>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">Email Sent</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                  58.16%
                  <span className="ml-2 text-sm font-medium text-gray-500">from 56.14%</span>
                </div>

                <div className="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                  </svg>
                  <span className="sr-only"> Increased by </span>
                  2.02%
                </div>
              </dd>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">Call Completed</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                  24.57%
                  <span className="ml-2 text-sm font-medium text-gray-500">from 28.62%</span>
                </div>

                <div className="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                  <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
                  </svg>
                  <span className="sr-only"> Decreased by </span>
                  4.05%
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="lg:m-5 lg:flex">
        <div className="w-full lg:p-10 lg:shadow-md rounded">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Your tasks</h1>
                <p className="mt-2 text-sm text-gray-700">A list of all the tasks you have to do to reach your daily goal.</p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button type="button" className="block rounded-md bg-[#1DCEEA] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">More</button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200 bg-white">

                      <tr>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <i className="fa fa-solid fa-clipboard-check"></i>
                              <img className="h-11 w-11 rounded-full" src="../img/heroicons-clipboard_check-basic.svg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-bold text-lg text-gray-900">Tasks</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-base text-gray-500 text-center">
                          <div className="text-gray-900">There are <span className="text-red-500 underline underline-offset-4 text-lg font-bold">12</span> tasks left for today that you have to do to reach your today`s goal.</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase text-teal-500">
                                  Task in Progress
                                </span>
                              </div>

                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                              <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                            </div>
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-white bg-gray-500 hover:bg-[#1DCEEA] px-10 py-2 rounded duration-75 transition-all">Action</a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <img className="h-11 w-11 rounded-full" src="../img/heroicons-filter-basic.svg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-bold text-lg text-gray-900">Leads</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-base text-gray-500 text-center">
                          <div className="text-gray-900">There are <span className="text-red-500 underline underline-offset-4 text-lg font-bold">10</span> leads left for today to follow up to reach your today`s goal.</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase text-teal-500">
                                  Leads to Follow
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                              <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '16%' }}> 16%</div>
                            </div>
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-white bg-gray-500 hover:bg-[#1DCEEA] px-10 py-2 rounded duration-75 transition-all">Action</a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <img className="h-11 w-11 rounded-full" src="../img/heroicons-document_search-basic.svg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-bold text-lg text-gray-900">RFQs</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-base text-gray-500 text-center">
                          <div className="text-gray-900">There are <span className="text-red-500 underline underline-offset-4 text-lg font-bold">4</span> RFQs left to check today to reach your today`s goal.</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase text-teal-500">
                                  RFQs to Check
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                              <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '68%' }}> 68%</div>
                            </div>
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-white bg-gray-500 hover:bg-[#1DCEEA] px-10 py-2 rounded duration-75 transition-all">Action</a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <img className="h-11 w-11 rounded-full" src="../img/heroicons-cash-cloudly.svg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-bold text-lg text-gray-900">Quotes</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-base text-gray-500 text-center">
                          <div className="text-gray-900">There are <span className="text-red-500 underline underline-offset-4 text-lg font-bold">9</span> qoutes to follow up to reach your today`s goal.</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase text-teal-500">
                                  Quotes to Follow
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                              <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '65%' }}> 65%</div>
                            </div>
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-white bg-gray-500 hover:bg-[#1DCEEA] px-10 py-2 rounded duration-75 transition-all">Action</a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <img className="h-11 w-11 rounded-full" src="../img/heroicons-presentation_chart_line-basic.svg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-bold text-lg text-gray-900">Sales Orders</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-base text-gray-500 text-center">
                          <div className="text-gray-900">There are <span className="text-red-500 underline underline-offset-4 text-lg font-bold">4</span> sales orders left to complete to reach your today`s goal.</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase text-teal-500">
                                  Sales Ordes to Complete
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                              <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '32%' }}> 32%</div>
                            </div>
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-white bg-gray-500 hover:bg-[#1DCEEA] px-10 py-2 rounded duration-75 transition-all">Action</a>
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <img className="h-11 w-11 rounded-full" src="../img/heroicons-currency_dollar-basic.svg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-bold text-lg text-gray-900">Invoices</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-base text-gray-500 text-center">
                          <div className="text-gray-900">There are <span className="text-red-500 underline underline-offset-4 text-lg font-bold">16</span> invoices left that you have to send to reach your today`s goal.</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase text-teal-500">
                                  Invoices to Send
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full">
                              <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" > 28%</div>
                            </div>
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-white bg-gray-500 hover:bg-[#1DCEEA] px-10 py-2 rounded duration-75 transition-all">Action</a>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default MotiviationComponent;
