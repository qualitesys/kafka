console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java 27 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class AbstractResponse contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method toSend arguments ResponseHeader  header|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method serializeWithHeader arguments ResponseHeader  header|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument header is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method serialize arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method errorCounts arguments Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.requests.AbstractResponse.errorCounts@POLYN196503 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method errorCounts arguments Stream&lt;Errors &gt;  errors"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument errors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.requests.AbstractResponse.errorCounts@POLYN196711 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method errorCounts arguments Collection&lt;Errors &gt;  errors"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method apiErrorCounts arguments Map&lt;? ,ApiError &gt;  errors"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument errors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method updateErrorCounts arguments Map&lt;Errors ,Integer &gt;  errorCounts|Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument errorCounts is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.AbstractResponse.updateErrorCounts@POLYN197917 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.requests.AbstractResponse.updateErrorCounts@POLYN197917 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method parseResponse arguments ByteBuffer  buffer|RequestHeader  requestHeader"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument requestHeader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.requests.AbstractResponse.parseResponse@POLYN198400 the MagicNumber/String  'Correlation id for response (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.requests.AbstractResponse.parseResponse@POLYN198400 the MagicNumber/String  ') does not match request (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.requests.AbstractResponse.parseResponse@POLYN198400 the MagicNumber/String  '), request header: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method parseResponse arguments ApiKeys  apiKey|ByteBuffer  responseBuffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.common.requests.AbstractResponse.parseResponse@POLYN199351 the MagicNumber/String  'ApiKey %s is not currently handled in `parseResponse`, the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.common.requests.AbstractResponse.parseResponse@POLYN199351 the MagicNumber/String  'code should be updated to do so.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AbstractResponse.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.common.requests.AbstractResponse.shouldClientThrottle@POLYN208645 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
