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
import SimpleCard from '../components/dashboard/SimpleCard'

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

const Dashboard: React.VFC = () => {
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

  return (
    <>
      <div className='frame'>
        <h2 className='page-title'>Dashboard</h2>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <SimpleCard title='New Users' content='1,504'>
            <BiUserPlus className='h-8 w-8 text-white' />
          </SimpleCard>
          <SimpleCard title='Daily Active Users' content='65,033'>
            <BiUser className='h-8 w-8 text-white' />
          </SimpleCard>
          <SimpleCard title='Daily Sales' content='2,560,000'>
            <BiYen className='h-8 w-8 text-white' />
          </SimpleCard>
          <div className='row-span-2 px-5 py-6 shadow-sm rounded-md bg-white'>
            <Doughnut options={doughOptions} data={doughnutData} />
          </div>
          <div className='row-span-2 col-span-2 px-5 py-6 shadow-sm rounded-md bg-white'>
            <Line options={lineOptions} data={lineData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
