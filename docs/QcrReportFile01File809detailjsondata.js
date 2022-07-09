console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java 60 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigurationUtils"
 , "c2" : "ConfigurationUtils(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConfigurationUtils"
 , "c2" : "ConfigurationUtils(Map<String,?>;String)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Path"
 , "c2" : "validateFile(String)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "validateInteger(String;boolean)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "validateLong(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "validateLong(String;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "validateLong(String;boolean;Long)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "URL"
 , "c2" : "validateUrl(String)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "validateString(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "validateString(String;boolean)"
 , "c3" : "7"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "7"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class ConfigurationUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.ConfigurationUtils@POLYN172716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.ConfigurationUtils@POLYN172888 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.ConfigurationUtils@POLYN172888 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method validateFile arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00038] For method validateFile list of called methods Object monObjet|java.net.URL validateUrlN173821"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateFile@POLYN173724 the MagicNumber/String  'The OAuth configuration option %s contains a URL (%s) that is malformed: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateFile@POLYN173724 the MagicNumber/String  'The OAuth configuration option %s contains a file (%s) that doesn't exist' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateFile@POLYN173724 the MagicNumber/String  'The OAuth configuration option %s contains a file (%s) that doesn't have read permission' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateFile@POLYN173724 the MagicNumber/String  'The OAuth configuration option %s references a directory (%s), not a file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method validateInteger arguments String  name|boolean  isRequired"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateInteger@POLYN175546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateInteger@POLYN175546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateInteger@POLYN175546 the MagicNumber/String  'The OAuth configuration option %s must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateInteger@POLYN175546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method validateLong arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176408 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method validateLong arguments String  name|boolean  isRequired"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176571 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method validateLong arguments String  name|boolean  isRequired|Long  min"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176781 the MagicNumber/String  'The OAuth configuration option %s must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateLong@POLYN176781 the MagicNumber/String  'The OAuth configuration option %s value must be at least %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method validateUrl arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00103] For method validateUrl list of called methods Object monObjet|String validateStringN178013|java.net.URL protocol_toLowerCaseN178924"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  'The OAuth configuration option %s contains a URL (%s) that is malformed: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  'The OAuth configuration option %s contains a URL (%s) that is missing the protocol' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  'http' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  'https' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  'file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String  'The OAuth configuration option %s contains a URL (%s) that contains an invalid protocol (%s); only \'http\', \'https\', and \'file\' protocol are supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method validateString arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateString@POLYN179491 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method validateString arguments String  name|boolean  isRequired"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateString@POLYN179666 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateString@POLYN179666 the MagicNumber/String  'The OAuth configuration option %s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateString@POLYN179666 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateString@POLYN179666 the MagicNumber/String  'The OAuth configuration option %s value must not contain only whitespace' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateString@POLYN179666 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00038] Public method validateFile is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00062] Public method validateInteger is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00077] Public method validateLong is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method validateLong is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00085] Public method validateLong is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00103] Public method validateUrl is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00126] Public method validateString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00130] Public method validateString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String 'The OAuth configuration option %s contains a URL -%s- that is malformed: %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String 'The OAuth configuration option %s contains a URL -%s- that is missing the protocol' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String 'file' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String 'http' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String 'https' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ConfigurationUtils.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.ConfigurationUtils.validateUrl@POLYN177916 the MagicNumber/String 'The OAuth configuration option %s contains a URL -%s- that contains an invalid protocol -%s-; only \'http\', \'https\', and \'file\' protocol are supported' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
