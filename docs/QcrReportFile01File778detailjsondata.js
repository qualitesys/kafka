console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java 32 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.kerberos.KerberosShortNamer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.kerberos.KerberosShortNamer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#41"
 , "c1" : "KerberosShortNamer"
 , "c2" : "KerberosShortNamer(List&lt;KerberosRule&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#45"
 , "c1" : "KerberosShortNamer"
 , "c2" : "fromUnparsedRules(String;List&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#50"
 , "c1" : "List&lt;KerberosRule&gt;"
 , "c2" : "parseRules(String;List&lt;String&gt;)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#83"
 , "c1" : "String"
 , "c2" : "shortName(KerberosName)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#102"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "26"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method fromUnparsedRules arguments String  defaultRealm|List&lt;String &gt;  principalToLocalRules"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.fromUnparsedRules@POLYN158089 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.fromUnparsedRules@POLYN158089 the MagicNumber/String  'DEFAULT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method parseRules arguments String  defaultRealm|List&lt;String &gt;  rules"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  'Invalid rule: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  'Invalid rule:  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  ' , unmatched substring:  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  11 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  'g' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  'L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  'U' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.parseRules@POLYN158547 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method shortName arguments KerberosName  kerberosName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument kerberosName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.shortName@POLYN160718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.shortName@POLYN160718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.shortName@POLYN160718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.shortName@POLYN160718 the MagicNumber/String  'No rules apply to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.shortName@POLYN160718 the MagicNumber/String  ', rules ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.toString@POLYN161889 the MagicNumber/String  'KerberosShortNamer(principalToLocalRules = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.security.kerberos.KerberosShortNamer.toString@POLYN161889 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosShortNamer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
