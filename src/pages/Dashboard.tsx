import React from 'react'
import { BiUser, BiUserPlus, BiYen } from 'react-icons/bi'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'

import Frame from '../components/atoms/Frame'
import Card from '../components/atoms/Card'
import PageTitle from '../components/atoms/PageTitle'
import SimpleCard from '../components/organisms/SimpleCard'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard: React.VFC = React.memo(() => {
  const doughOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Age Distribution'
      }
    }
  }

  const doughnutData = {
    labels: ['10s', '20s', '30s', '40s'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Line Chart'
      }
    }
  }

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Product One',
        data: [400, 400, 700, 700, 700, 500, 800],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Product Two',
        data: [200, 500, 600, 600, 400, 600, 700],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  const simpleCardData = [
    {
      title: 'New Users',
      content: '1,504',
      icon: <BiUserPlus className='h-8 w-8 text-white' />
    },
    {
      title: 'Daily Active Users',
      content: '65,033',
      icon: <BiUser className='h-8 w-8 text-white' />
    },
    {
      title: 'Daily Sales',
      content: '2,560,000',
      icon: <BiYen className='h-8 w-8 text-white' />
    }
  ]

  return (
    <>
      <Frame>
        <div className='mb-4'>
          <PageTitle text='Dashboard' />
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          {simpleCardData.map((simpleCard, index) => (
            <SimpleCard
              title={simpleCard.title}
              content={simpleCard.content}
              key={index}
            >
              {simpleCard.icon}
            </SimpleCard>
          ))}
          <div className='row-span-2'>
            <Card>
              <Doughnut options={doughOptions} data={doughnutData} />
            </Card>
          </div>
          <div className='row-span-2 col-span-2'>
            <Card>
              <Line options={lineOptions} data={lineData} />
            </Card>
          </div>
        </div>
      </Frame>
    </>
  )
})

export default Dashboard
