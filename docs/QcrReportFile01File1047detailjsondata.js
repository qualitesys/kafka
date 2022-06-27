console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java 7 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractConnectorClientConfigOverridePolicy"
 , "c2" : "org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "policyName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isAllowed(ConfigValue)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy.policyName@POLYN161735 the MagicNumber/String  'All' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method isAllowed arguments ConfigValue  configValue"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy.isAllowed@POLYN161837 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy.configure@POLYN161953 the MagicNumber/String  'Setting up All Policy for ConnectorClientConfigOverride. This will allow all client configurations to be overridden' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy.configure@POLYN161953"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AllConnectorClientConfigOverridePolicy.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00027] In the recursive method org.apache.kafka.connect.connector.policy.AllConnectorClientConfigOverridePolicy.configure@POLYN161953 the MagicNumber/String 'Setting up All Policy for ConnectorClientConfigOverride. This will allow all client configurations to be overridden' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
