import Layout from '../components/Layout'

export default function About(){
  return (
    <Layout>
      <h1 className="text-3xl font-bold">About Solvex Integrated Solutions</h1>
      <p className="mt-4 text-gray-700">Solvex builds engineering software for power system analysis. Our flagship product EMFIS is Electromagnetic Field Analysis Software for High Voltage Transmission Systems, designed for utilities, consultants, and grid operators.</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p className="mt-2 text-gray-600">Deliver accurate transmission field analysis tools that align with real-world engineering workflows.</p>
      </section>
    </Layout>
  )
}
