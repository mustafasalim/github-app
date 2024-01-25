import { useRepo } from "../../store/repoData/hook"
import { Empty } from "antd"

function Repo() {
  const repoData = useRepo()

  return (
    <>
      {repoData.repoData.length === 0 ? (
        <div className="mt-10 w-full flex items-center justify-center">
          <Empty />
        </div>
      ) : (
        <>
          {repoData.repoData.slice(0).map((data: any) => (
            <a href={data.clone_url}>
              <div className="w-[550px] h-[150px] hover:-translate-y-0.5 cursor-pointer transition-all rounded-2xl repoBackground">
                <div className="grid pl-5 pt-5 gap-y-2">
                  <div className="text-[#CDD5E0] text-[20px]">{data.name}</div>
                  <div className="text-[#96A3B4] w-[500px] text-[15px]">
                    {data.description === null ? (
                      <div>---</div>
                    ) : (
                      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {data.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex pl-5 pt-5 w-full gap-x-4 ">
                  {data.private === true && (
                    <div className="flex text-[16px] text-[#96A3B4] ">
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8 16.4L15 17.75C13.2222 19.0833 10.7778 19.0833 9 17.75L7.2 16.4C5.18555 14.8892 4 12.5181 4 10V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.5181 18.8144 14.8892 16.8 16.4Z"
                            stroke="#97A3B6"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <circle
                            cx="12"
                            cy="10"
                            r="1"
                            fill="#97A3B6"
                          />
                          <circle
                            cx="9"
                            cy="10"
                            r="1"
                            fill="#97A3B6"
                          />
                          <circle
                            cx="15"
                            cy="10"
                            r="1"
                            fill="#97A3B6"
                          />
                        </svg>
                      </div>
                      <div>MIT</div>
                    </div>
                  )}
                  <div className="flex text-[16px] text-[#96A3B4] ">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="18"
                          y="15"
                          width="4"
                          height="4"
                          rx="2"
                          transform="rotate(90 18 15)"
                          stroke="#97A3B6"
                          stroke-width="2"
                        />
                        <rect
                          x="6"
                          y="8"
                          width="4"
                          height="4"
                          rx="2"
                          transform="rotate(-90 6 8)"
                          stroke="#97A3B6"
                          stroke-width="2"
                        />
                        <path
                          d="M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14"
                          stroke="#97A3B6"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                    <div>{data.watchers}</div>
                  </div>

                  <div className="flex text-[16px] text-[#96A3B4] ">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1437 6.62758C10.9303 4.66658 11.3236 3.68608 12 3.68608C12.6763 3.68608 13.0696 4.66658 13.8562 6.62758L13.8928 6.7189C14.3372 7.82676 14.5594 8.3807 15.0123 8.71739C15.4651 9.05407 16.0596 9.10731 17.2485 9.21379L17.4634 9.23304C19.4092 9.4073 20.3822 9.49443 20.5903 10.1134C20.7985 10.7324 20.076 11.3897 18.6309 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.8809 14.5776C16.8491 14.659 16.8227 14.7423 16.8018 14.8271C16.6897 15.2818 16.7968 15.7645 17.0111 16.73L17.0777 17.0305C17.4714 18.8048 17.6682 19.692 17.3246 20.0747C17.1961 20.2177 17.0292 20.3206 16.8438 20.3712C16.3476 20.5066 15.6431 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8935 17.5355 11.6846 17.5689C11.1535 17.6537 10.6909 18.0306 9.76577 18.7845C8.35681 19.9326 7.65234 20.5066 7.15614 20.3712C6.97072 20.3206 6.80381 20.2177 6.67538 20.0747C6.33171 19.692 6.52854 18.8048 6.92222 17.0305L6.98889 16.73C7.2031 15.7645 7.31021 15.2818 7.19815 14.8271C7.17725 14.7423 7.15081 14.659 7.11901 14.5776C6.94854 14.1415 6.58279 13.8087 5.85128 13.1432L5.369 12.7044C3.92395 11.3897 3.20143 10.7324 3.40961 10.1134C3.61779 9.49443 4.5907 9.4073 6.53651 9.23304L6.75145 9.21379C7.94036 9.10731 8.53482 9.05407 8.98767 8.71739C9.44052 8.3807 9.66272 7.82676 10.1071 6.71889L10.1437 6.62758Z"
                          stroke="#97A3B6"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                    <div>{data.stargazers_count}</div>
                  </div>
                  <div className="flex items-center pl-5 text-[11px] text-[#96A3B4]">
                    updated {data.updated_at}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </>
      )}
    </>
  )
}

export default Repo
