import React from 'react';
import './Form.css'

const Form = () => {
    return  <>  
    <div class="container">
        <h1>Company Details Form</h1>
        <form>
            <div class="grid">
                <div class="item">
                    <label for="companyName">Company Name:</label>
                    <input type="text" id="companyName" name="companyName" placeholder="Company Name"/>
                </div>
                <div class="item">
                    <label for="mobileNo">Mobile Number:</label>
                    <input type="text" id="mobileNo" name="mobileNo" placeholder="Mobile Number"/>
                </div>
                <div class="item">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div class="item">
                    <label for="status">Status:</label>
                    <select id="status" name="status">
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                    </select>
                </div>
                <div class="item">
                    <label for="ebaySpoc">Ebay SPOC:</label>
                    <input type="text" id="ebaySpoc" name="ebaySpoc" placeholder="Ebay SPOC"/>
                </div>
                <div class="item">
                    <label for="clientPartner">Client Partner:</label>
                    <input type="text" id="clientPartner" name="clientPartner" placeholder="Client Partner"/>
                </div>
                <div class="item">
                    <label for="clientFeedback">Client Feedback:</label>
                    <textarea id="clientFeedback" name="clientFeedback" placeholder="Client Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="otherMarketplacePartner">Other Marketplace Technical Partner:</label>
                    <input type="text" id="otherMarketplacePartner" name="otherMarketplacePartner" placeholder="Other Marketplace Technical Partner"/>
                </div>
                <div class="item">
                    <label for="otherMarketplaceFeedback">Other Marketplace Technical Partner Feedback:</label>
                    <textarea id="otherMarketplaceFeedback" name="otherMarketplaceFeedback" placeholder="Other Marketplace Technical Partner Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="etsyTechnicalManager">Etsy Technical Manager:</label>
                    <input type="text" id="etsyTechnicalManager" name="etsyTechnicalManager" placeholder="Etsy Technical Manager"/>
                </div>
                <div class="item">
                    <label for="etsyTechnicalManagerFeedback">Etsy Technical Manager Feedback:</label>
                    <textarea id="etsyTechnicalManagerFeedback" name="etsyTechnicalManagerFeedback" placeholder="Etsy Technical Manager Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="clientCategory">Client Category:</label>
                    <select id="clientCategory" name="clientCategory">
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                    </select>
                </div>
                <div class="item">
                    <label for="contactName">Contact Name:</label>
                    <input type="text" id="contactName" name="contactName" placeholder="Contact Name"/>
                </div>
                <div class="item">
                    <label for="email2">Email 2:</label>
                    <input type="email" id="email2" name="email2" placeholder="Email 2"/>
                </div>
                <div class="item">
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" placeholder="Address"/>
                </div>
                <div class="item">
                    <label for="otherDetails">Other Details:</label>
                    <textarea id="otherDetails" name="otherDetails" placeholder="Other Details"></textarea>
                </div>
                <div class="item">
                    <label for="amazonTechnicalPartner">Amazon Technical Partner:</label>
                    <input type="text" id="amazonTechnicalPartner" name="amazonTechnicalPartner" placeholder="Amazon Technical Partner"/>
                </div>
                <div class="item">
                    <label for="amazonTechnicalPartnerFeedback">Amazon Technical Partner Feedback:</label>
                    <textarea id="amazonTechnicalPartnerFeedback" name="amazonTechnicalPartnerFeedback" placeholder="Amazon Technical Partner Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="flipkartTechnicalPartner">Flipkart Technical Partner:</label>
                    <input type="text" id="flipkartTechnicalPartner" name="flipkartTechnicalPartner" placeholder="Flipkart Technical Partner"/>
                </div>
                <div class="item">
                    <label for="flipkartTechnicalPartnerFeedback">Flipkart Technical Partner Feedback:</label>
                    <textarea id="flipkartTechnicalPartnerFeedback" name="flipkartTechnicalPartnerFeedback" placeholder="Flipkart Technical Partner Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="auditorSpoc">Auditor SPOC:</label>
                    <input type="text" id="auditorSpoc" name="auditorSpoc" placeholder="Auditor SPOC"/>
                </div>
                <div class="item">
                    <label for="teamName">Team Name:</label>
                    <input type="text" id="teamName" name="teamName" placeholder="Team Name"/>
                </div>
                <div class="item">
                    <label for="renewalDate">Renewal Date:</label>
                    <input type="date" id="renewalDate" name="renewalDate"/>
                </div>
                <div class="item">
                    <label for="mobile">Mobile:</label>
                    <input type="text" id="mobile" name="mobile" placeholder="Mobile"/>
                </div>
                <div class="item">
                    <label for="city">City:</label>
                    <input type="text" id="city" name="city" placeholder="City"/>
                </div>
                <div class="item">
                    <label for="state">State:</label>
                    <input type="text" id="state" name="state" placeholder="State"/>
                </div>
                <div class="item">
                    <label for="pincode">Pincode:</label>
                    <input type="text" id="pincode" name="pincode" placeholder="Pincode"/>
                </div>
                <div class="item">
                    <label for="website">Website:</label>
                    <input type="url" id="website" name="website" placeholder="Website"/>
                </div>
                <div class="item">
                    <label for="feedbackLink">Feedback Link:</label>
                    <input type="url" id="feedbackLink" name="feedbackLink" placeholder="Feedback Link"/>
                </div>
                <div class="item">
                    <label for="accountManagement">Account Management:</label>
                    <input type="text" id="accountManagement" name="accountManagement" placeholder="Account Management"/>
                </div>
                <div class="item">
                    <label for="accountManagementFeedback">Account Management Feedback:</label>
                    <textarea id="accountManagementFeedback" name="accountManagementFeedback" placeholder="Account Management Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="amazonGlobalTechnicalPartner">Amazon Global Technical Partner:</label>
                    <input type="text" id="amazonGlobalTechnicalPartner" name="amazonGlobalTechnicalPartner" placeholder="Amazon Global Technical Partner"/>
                </div>
                <div class="item">
                    <label for="amazonGlobalTechnicalPartnerFeedback">Amazon Global Technical Partner Feedback:</label>
                    <textarea id="amazonGlobalTechnicalPartnerFeedback" name="amazonGlobalTechnicalPartnerFeedback" placeholder="Amazon Global Technical Partner Feedback"></textarea>
                </div>
                <div class="item">
                    <label for="auditorFeedbackRemark">Auditor Feedback Remark:</label>
                    <textarea id="auditorFeedbackRemark" name="auditorFeedbackRemark" placeholder="Auditor Feedback Remark"></textarea>
                </div>
                <div class="item">
                    <label for="prospectOfRenewal">Prospect of Renewal:</label>
                    <input type="text" id="prospectOfRenewal" name="prospectOfRenewal" placeholder="Prospect of Renewal"/>
                </div>
                <div class="item">
                    <label for="pitch">Pitch:</label>
                    <input type="text" id="pitch" name="pitch" placeholder="Pitch"/>
                </div>
            </div>
            <div class="item">
                <label for="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" placeholder="Feedback"></textarea>
            </div>
            <div class="container">
        <h1>Marketplace</h1>
        <div class="marketplace">
            <label for="flipkart"><input type="checkbox" id="flipkart" name="flipkart"/> Flipkart</label>
            <label for="snapdeal"><input type="checkbox" id="snapdeal" name="snapdeal"/> Snapdeal</label>
            <label for="shopclues"><input type="checkbox" id="shopclues" name="shopclues"/> Shopclues</label>
            <label for="limeroad"><input type="checkbox" id="limeroad" name="limeroad"/> Limeroad</label>
            <label for="ebay"><input type="checkbox" id="ebay" name="ebay"/> eBay</label>
            <label for="etsy"><input type="checkbox" id="etsy" name="etsy"/> Etsy</label>
            <label for="meesho"><input type="checkbox" id="meesho" name="meesho"/> Meesho</label>
            <label for="shopee"><input type="checkbox" id="shopee" name="shopee"/> Shopee</label>
            <label for="myntra"><input type="checkbox" id="myntra" name="myntra"/> Myntra</label>
            <label for="jiomart"><input type="checkbox" id="jiomart" name="jiomart"/> Jiomart</label>
            <label for="walmart"><input type="checkbox" id="walmart" name="walmart"/> Walmart</label>
            <label for="amazonin"><input type="checkbox" id="amazonin" name="amazonin"/> Amazon.in</label>
            <label for="amazoncom"><input type="checkbox" id="amazoncom" name="amazoncom"/> Amazon.com</label>
            <label for="nykaa"><input type="checkbox" id="nykaa" name="nykaa"/> Nykaa</label>
        </div>

        <h1>Client Report</h1>
        <table class="client-report">
            <thead>
                <tr>
                    <th>Reported by</th>
                    <th>Task</th>
                    <th>Add Task/View Task</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Working time: 41 Hours 8 Minutes</td>
                    <td>Task: Health Check</td>
                    <td>
                        <button class="add-task-btn">Add Task</button>
                        <button class="add-task-btn">View Task</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
            <button type="submit">Submit</button>
        </form>

    </div>
    <div class="container_project">
        <h1>Projected Work Table</h1>
        <table>
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Details</th>
                    <th>Listing QCC</th>
                    <th>Listing QCC Done</th>
                    <th>Billing Date</th>
                    <th>Expired</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Startup Package</td>
                    <td>3 Months</td>
                    <td>175</td>
                    <td>Child Listing - 338</td>
                    <td>Jul 01 2023 / Sep 28 2023</td>
                    <td>8 Days Left</td>
                    <td>2000 Package Details</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container_history">
        <h1>Comment History</h1>
        <div class="comment">
            <div class="meta">
                Sapna Singh - Sep 19, 2023 - 12:00 A.M.
            </div>
            <div class="description">
                <p>Client calls - Sapna Singh</p>
                <p>Description: Call not received</p>
            </div>
        </div>
        <div class="comment">
            <div class="meta">
                John Doe - Sep 20, 2023 - 2:30 P.M.
            </div>
            <div class="description">
                <p>Client email - John Doe</p>
                <p>Description: Email response sent</p>
            </div>
        </div>
    </div>
 
    </>
    ;
}


export default Form;