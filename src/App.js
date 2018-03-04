import React from "react";

import {
    Grid,
    Image,
    Icon,
    List,
    SegmentGroup,
    Segment,
    Rating
} from "semantic-ui-react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const gridStyleLeft = {
            margin: 0,
            padding: 0
        };

        const segmentStyleLeft = {
            marginTop: 0,
            marginLeft: 0,
            marginBottom: 0,
            marginRight: 0,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            border: 0
        };

        const segmentStyleLeftFirst = {
            marginTop: 0,
            marginLeft: 0,
            marginBottom: 0,
            marginRight: 0,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 0,
            border: 0
        };

        const segmentStyleRight = {
            marginTop: 0,
            marginLeft: 20,
            marginBottom: 0,
            marginRight: 0,
            paddingLeft: 10,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 10,
            border: 0
        };

        return (
            <Grid celled>
                <Grid.Row>
                    <Grid.Column style={gridStyleLeft}>
                        <SegmentGroup
                            horizontal
                            style={{ margin: 0, padding: 0 }}
                        >
                            <Segment
                                width={13}
                                style={segmentStyleLeft}
                                floated="left"
                            >
                                <Image
                                    src="Samridhi.jpg"
                                    size="small"
                                    circular
                                    floated="left"
                                    verticalAlign="middle"
                                />
                                <h1
                                    style={{
                                        margin: 0,
                                        padding: 0,
                                        fontSize: 32,
                                        display: "inline-block"
                                    }}
                                >
                                    Samridhi Dubey
                                </h1>
                                <h3 style={{ marginTop: 5, fontSize: 18 }}>
                                    Salesforce Certified Administrator
                                </h3>
                            </Segment>
                            <Segment
                                width={3}
                                floated="right"
                                style={segmentStyleRight}
                            >
                                <List>
                                    <List.Item>
                                        <List.Icon name="point" size="large" />
                                        <List.Content>
                                            <h4>Berlin, Germany</h4>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="mail" size="large" />
                                        <List.Content>
                                            <h4>
                                                <a href="mailto:sd77574@gmail.com">
                                                    sd77574@gmail.com
                                                </a>
                                            </h4>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="call" size="large" />
                                        <List.Content>
                                            <h4>+49-152 515 76677</h4>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="cloud" size="large" />
                                        <List.Content>
                                            <h4>
                                                <a href="http://certification.salesforce.com/certification-detail?conId=0034A00002qOz9SQAS">
                                                    Certification
                                                </a>
                                            </h4>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon
                                            name="linkify"
                                            size="large"
                                        />
                                        <List.Content>
                                            <h4>
                                                <a href="https://trailhead.salesforce.com/en/me/00550000007WomHAAS">
                                                    Trailhead
                                                </a>
                                            </h4>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon
                                            name="linkedin"
                                            size="large"
                                        />
                                        <List.Content>
                                            <h4>
                                                <a href="https://www.linkedin.com/in/samridhi-dubey/">
                                                    LinkedIn
                                                </a>
                                            </h4>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                        </SegmentGroup>

                        <Segment style={segmentStyleLeftFirst}>
                            <h3 style={{ margin: 0 }}>
                                <Icon name="user" size="large" /> Profile
                            </h3>
                            <List
                                style={{
                                    paddingLeft: 10,
                                    marginLeft: 15
                                }}
                            >
                                <List.Item>
                                    <List.Content style={{ paddingLeft: 10 }}>
                                        <p>
                                            I have 8+ years experience as IT
                                            professional having hands-on
                                            experience. I am certified
                                            Salesforce Administrator and
                                            Opentext WSM Consultant.
                                            <br />
                                            <br />
                                            My key responsibilities include:
                                        </p>
                                        <ul style={{ marginLeft: -25 }}>
                                            <li style={{ marginBottom: 5 }}>
                                                Perform all tasks related to the
                                                day-to-day Salesforce
                                                administration.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Manage Salesforce users, monitor
                                                support requests and resolve.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Understand all aspects of
                                                Salesforce Configuration and
                                                technical/functional
                                                capabilities.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Gather business requirements for
                                                enhancements and translate into
                                                technical requirements
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Develop custom list views,
                                                templates, reports and
                                                dashboards to support the
                                                business.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Communicate future Salesforce
                                                releases and enhancements.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Recommend improvements to
                                                existing systems and processes.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Manage Profiles, Role Hierarchy,
                                                Permission Sets and Security
                                                Controls.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Create and manage Apps, Objects,
                                                Workflows, and Validation rules,
                                                Page Layouts, Record Types,
                                                formulas and Custom Report
                                                Types.
                                            </li>
                                            <li style={{ marginBottom: 5 }}>
                                                Perform data imports, exports,
                                                and updating and clean-up
                                                Organization data.
                                            </li>
                                        </ul>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Segment>
                        <Segment style={segmentStyleLeft}>
                            <h3 style={{ margin: 0 }}>
                                <Icon name="suitcase" size="large" /> Work
                                Experience
                            </h3>
                            <List
                                style={{
                                    paddingLeft: 10,
                                    marginLeft: 20
                                }}
                            >
                                {/* Infosys */}
                                <List.Item>
                                    <List.Content style={{ paddingLeft: 10 }}>
                                        <h2
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                fontSize: 22
                                            }}
                                        >
                                            Senior Consultant, Infosys Ltd. -
                                            Hyderabad, India
                                        </h2>
                                        <h3 style={{ margin: 0, padding: 0 }}>
                                            Nov 2014 - Dec 2016 (2 years 2
                                            months)
                                        </h3>
                                        <List
                                            as="ul"
                                            style={{ marginLeft: 15 }}
                                        >
                                            <List.Item as="li">
                                                Led and managed the team of 8
                                                members working on various
                                                projects which used Salesforce
                                                and OpenText products
                                            </List.Item>
                                            <List.Item as="li">
                                                Administration and support of
                                                the Opentext WSM
                                            </List.Item>
                                            <List.Item as="li">
                                                Implemented new enhancements
                                                including creation of custom
                                                objects, workflows, email alerts
                                                and templates
                                            </List.Item>
                                            <List.Item as="li">
                                                Recommend improvements to
                                                existing systems and processes.
                                            </List.Item>
                                            <List.Item as="li">
                                                Part of multiple Request for
                                                Proposals(RFPs) which were
                                                converted to projects eventually
                                            </List.Item>
                                            <List.Item as="li">
                                                Facilitated planning, allocation
                                                and monitoring of tasks among
                                                team members
                                            </List.Item>
                                            <List.Item as="li">
                                                Collaborating with Onsite
                                                Coordinator with respect to
                                                project status and goal
                                                alignment
                                            </List.Item>
                                            <List.Item as="li">
                                                Managing servicing tickets in
                                                Remedy with team and providing
                                                regular SLA reports
                                            </List.Item>
                                            <List.Item as="li">
                                                Involved in employee hiring
                                                processes
                                            </List.Item>
                                        </List>
                                    </List.Content>
                                </List.Item>
                                {/* Wipro */}
                                <List.Item>
                                    <List.Content
                                        style={{
                                            paddingLeft: 10,
                                            marginTop: 15
                                        }}
                                    >
                                        <h2
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                fontSize: 22
                                            }}
                                        >
                                            Senior Software Engineer, Wipro
                                            Technologies. - Hyderabad, India
                                        </h2>
                                        <h3 style={{ margin: 0, padding: 0 }}>
                                            Dec 2012 - Nov 2014 (2 years)
                                        </h3>
                                        <List
                                            as="ul"
                                            style={{ marginLeft: 15 }}
                                        >
                                            <List.Item as="li">
                                                Lead the Operation Team of 3,
                                                handling and supporting Opentext
                                                Website Content Manager(WSM)
                                            </List.Item>
                                            <List.Item as="li">
                                                Facilitated planning, allocation
                                                and monitoring of tasks among
                                                team members
                                            </List.Item>
                                            <List.Item as="li">
                                                Collaborating with Onsite
                                                Coordinator with respect to
                                                project status and goal
                                                alignment
                                            </List.Item>
                                            <List.Item as="li">
                                                Co-ordinate the issues about
                                                Project requirements (Software,
                                                Hardware, Resources) to Project
                                                Manager / Onsite Coordinator
                                            </List.Item>
                                            <List.Item as="li">
                                                Managing servicing tickets in
                                                Remedy with team and providing
                                                regular SLA reports
                                            </List.Item>
                                            <List.Item as="li">
                                                Went onsite (Reading, UK) for
                                                upgradation of Opentext Website
                                                Content Management Tool
                                            </List.Item>
                                            <List.Item as="li">
                                                Monitoring and maintaining
                                                website infrastructure for
                                                Opentext WSM for client
                                            </List.Item>
                                            <List.Item as="li">
                                                Enhancement/Development of new
                                                templates/css/javascript files
                                                as per client requirements
                                            </List.Item>
                                            <List.Item as="li">
                                                Supporting integration with
                                                other backend Java/J2EE
                                                applications
                                            </List.Item>
                                        </List>
                                    </List.Content>
                                </List.Item>
                                {/* Tech Mahindra  */}
                                <List.Item>
                                    <List.Content
                                        style={{
                                            paddingLeft: 10,
                                            marginTop: 15
                                        }}
                                    >
                                        <h2
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                fontSize: 22
                                            }}
                                        >
                                            Software Engineer, Tech Mahindra -
                                            Chennai, India
                                        </h2>
                                        <h3 style={{ margin: 0, padding: 0 }}>
                                            Jul 2008 - Dec 2012 (4 years 6
                                            months)
                                        </h3>
                                        <List
                                            as="ul"
                                            style={{ marginLeft: 15 }}
                                        >
                                            <List.Item as="li">
                                                As a Technical Lead, I managed
                                                an 8 member team working on
                                                layout and content changes for
                                                Mars.com
                                            </List.Item>
                                            <List.Item as="li">
                                                Developing
                                                templates/html/css/javascript
                                                for the layout changes using
                                                Reddot CMS(now Opentext Website
                                                Content Management)
                                            </List.Item>
                                            <List.Item as="li">
                                                Facilitated planning, allocation
                                                and monitoring of tasks among
                                                team members
                                            </List.Item>
                                            <List.Item as="li">
                                                Creation and configuration of
                                                the tool for Publication
                                                Packages for websites.
                                            </List.Item>
                                            <List.Item as="li">
                                                Setting up and maintaining
                                                Development, Staging and
                                                Production environments for
                                                Reddot CMS
                                            </List.Item>
                                            <List.Item as="li">
                                                Created workflows to incorporate
                                                content change approval in the
                                                website.
                                            </List.Item>
                                            <List.Item as="li">
                                                Unit testing and Integration
                                                testing for website.
                                            </List.Item>
                                            <List.Item as="li">
                                                Organized and conducted training
                                                on Opentext WSM for the team
                                                members
                                            </List.Item>
                                            <List.Item as="li">
                                                Documented Technical, Design and
                                                User guide for developing,
                                                supporting and maintaing the
                                                website
                                            </List.Item>
                                            <List.Item as="li">
                                                Collaborating with Onsite
                                                Coordinator with respect to
                                                project status and goal
                                                alignment
                                            </List.Item>
                                            <List.Item as="li">
                                                Coordinate the issues about
                                                Project requirements (Software,
                                                Hardware, Resources) to Project
                                                Manager / Onsite Coordinator
                                            </List.Item>
                                        </List>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Segment>

                        <Segment style={segmentStyleLeft}>
                            <h3 style={{ margin: 0 }}>
                                <Icon name="student" size="large" /> Education
                            </h3>
                            <List
                                style={{
                                    paddingLeft: 10,
                                    marginLeft: 20
                                }}
                            >
                                {/* BITS */}
                                <List.Item>
                                    <List.Content style={{ paddingLeft: 10 }}>
                                        <h2
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                fontSize: 22
                                            }}
                                        >
                                            Bachelor of Engineering (CGPS-6.2) -
                                            Jun 2004 - May 2008
                                        </h2>
                                        <h3
                                            style={{
                                                margin: 3,
                                                padding: 0,
                                                fontWeight: "normal"
                                            }}
                                        >
                                            Birla Institute of Technology,
                                            Pilani, Rajasthan, India
                                        </h3>
                                    </List.Content>
                                </List.Item>
                                {/* 12th */}
                                <List.Item>
                                    <List.Content
                                        style={{
                                            paddingLeft: 10,
                                            marginTop: 10
                                        }}
                                    >
                                        <h2
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                fontSize: 22
                                            }}
                                        >
                                            12th/Higher Secondary (Marks-91.6%)
                                            - Apr 2003 - Mar 2004
                                        </h2>
                                        <h3
                                            style={{
                                                margin: 3,
                                                padding: 0,
                                                fontWeight: "normal"
                                            }}
                                        >
                                            Saraswati Shishu Mandir, Mungeli,
                                            Chhatisgarh, India
                                        </h3>
                                    </List.Content>
                                </List.Item>
                                {/* 10th */}
                                <List.Item>
                                    <List.Content
                                        style={{
                                            paddingLeft: 10,
                                            marginTop: 10
                                        }}
                                    >
                                        <h2
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                fontSize: 20
                                            }}
                                        >
                                            10th/Senior Secondary (Marks-90%) -
                                            Apr 2001 - Mar 2002
                                        </h2>
                                        <h3
                                            style={{
                                                margin: 3,
                                                padding: 0,
                                                fontWeight: "normal"
                                            }}
                                        >
                                            Saraswati Shishu Mandir, Mungeli,
                                            Chhatisgarh, India
                                        </h3>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Segment>

                        <Segment style={segmentStyleLeft}>
                            <h3 style={{ margin: 0 }}>
                                <Icon name="info" size="large" /> Personal
                                Details
                            </h3>
                            <List
                                style={{
                                    paddingLeft: 10,
                                    marginLeft: 20
                                }}
                            >
                                <List.Item>
                                    <List.Content style={{ paddingLeft: 10 }}>
                                        <SegmentGroup
                                            horizontal
                                            style={{
                                                border: 0,
                                                margin: 0,
                                                padding: 0
                                            }}
                                        >
                                            <Segment
                                                style={{
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0
                                                }}
                                            >
                                                <h2
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        fontSize: 22
                                                    }}
                                                >
                                                    Languages
                                                </h2>
                                                <h3
                                                    style={{
                                                        margin: 3,
                                                        padding: 0,
                                                        fontWeight: "normal"
                                                    }}
                                                >
                                                    English{" "}
                                                    <Rating
                                                        icon="check"
                                                        defaultRating={3}
                                                        maxRating={4}
                                                        disabled
                                                    />
                                                </h3>
                                                <h3
                                                    style={{
                                                        margin: 3,
                                                        padding: 0,
                                                        fontWeight: "normal"
                                                    }}
                                                >
                                                    Hindi{" "}
                                                    <Rating
                                                        icon="check"
                                                        defaultRating={4}
                                                        maxRating={4}
                                                        disabled
                                                    />
                                                </h3>
                                            </Segment>
                                            <Segment style={{ border: 0 }}>
                                                <h2
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        fontSize: 22
                                                    }}
                                                >
                                                    Gender
                                                </h2>
                                                <h3
                                                    style={{
                                                        margin: 3,
                                                        padding: 0,
                                                        fontWeight: "normal"
                                                    }}
                                                >
                                                    Female
                                                </h3>
                                            </Segment>
                                            <Segment style={{ border: 0 }}>
                                                <h2
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        fontSize: 22
                                                    }}
                                                >
                                                    Date of Birth
                                                </h2>
                                                <h3
                                                    style={{
                                                        margin: 3,
                                                        padding: 0,
                                                        fontWeight: "normal"
                                                    }}
                                                >
                                                    16-Sep-1986
                                                </h3>
                                            </Segment>
                                        </SegmentGroup>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;
