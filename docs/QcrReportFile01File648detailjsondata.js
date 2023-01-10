console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.DescribeConfigsResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeConfigsResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00210"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#210"
 , "c1" : "Map<ConfigResource,DescribeConfigsResponseData.DescribeConfigsResult>"
 , "c2" : "resultMap()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00220"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#220"
 , "c1" : "DescribeConfigsResponse"
 , "c2" : "DescribeConfigsResponse(DescribeConfigsResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00226"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#226"
 , "c1" : "DescribeConfigsResponse"
 , "c2" : "DescribeConfigsResponse(DescribeConfigsResponseData;short)"
 , "c3" : "10"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00249"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#249"
 , "c1" : "DescribeConfigsResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00254"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#254"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00259"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#259"
 , "c1" : "Map<Errors,Integer>"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00267"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#267"
 , "c1" : "DescribeConfigsResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00272"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#272"
 , "c1" : "boolean"
 , "c2" : "shouldClientThrottle(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.requests.DescribeConfigsResponse.Config.Config@POLYN183169 the MagicNumber/String  'error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.requests.DescribeConfigsResponse.Config.Config@POLYN183169 the MagicNumber/String  'entries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.requests.DescribeConfigsResponse.ConfigEntry.ConfigEntry@POLYN184143 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.requests.DescribeConfigsResponse.ConfigEntry.ConfigEntry@POLYN184570 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.requests.DescribeConfigsResponse.ConfigEntry.ConfigEntry@POLYN184570 the MagicNumber/String  'source' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.requests.DescribeConfigsResponse.ConfigEntry.ConfigEntry@POLYN184570 the MagicNumber/String  'synonyms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.requests.DescribeConfigsResponse.ConfigSynonym.ConfigSynonym@POLYN190986 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.common.requests.DescribeConfigsResponse.ConfigSynonym.ConfigSynonym@POLYN190986 the MagicNumber/String  'source' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#226"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00226] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00231] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.common.requests.DescribeConfigsResponse.DescribeConfigsResponse@POLYN192389 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#267"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00267] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#272"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00272] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.common.requests.DescribeConfigsResponse.shouldClientThrottle@POLYN194636 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeConfigsResponse.throttleTimeMs@POLYN193733"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeConfigsResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
